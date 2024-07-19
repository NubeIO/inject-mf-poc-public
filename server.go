package main

import (
	"archive/zip"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"

	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

type JSONRequest struct {
	Name        string `json:"name"`
	Version     string `json:"version"`
	IconName    string `json:"icon_name"`
	Description string `json:"description"`
	Data        string `json:"data"`
	AppURL      string `json:"app_url"`
}

type TranslationRequest struct {
	Name        string `json:"name"`
	Data				map[string]map[string]string `json:"data"`
}

type Config struct {
	Version    int            `json:"version"`
	Extensions map[string]App `json:"extensions"`
}

type App struct {
	Name  string `json:"name"`
	Entry string `json:"entry"`
	Icon  string `json:"icon"`
	Url   string `json:"url"`
}

type Properties struct {
	MenuItems []MenuItem `json:"menuItems"`
}

type MenuItem struct {
	Label string `json:"label"`
	Route string `json:"route"`
	Icon  string `json:"icon"`
}

type RemoveAppName struct {
	AppName string `json:"name"`
	Route   string `json:"route"`
}

func main() {
	// Initialize Gin
	r := gin.Default()

	// Serve static files
	r.Use(func(c *gin.Context) {
		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		c.Header("Access-Control-Allow-Headers", "Content-Type, Authorization")
		c.Header("Cache-Control", "no-cache, no-store, must-revalidate")
		c.Header("Pragma", "no-cache")
		c.Header("Expires", "0")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
			return
		}
		c.Next()
	})

	// Serve static files
	r.Use(static.Serve("/", static.LocalFile("./static", false)))
	r.Use(static.Serve("/translations", static.LocalFile("./translations", false)))

	r.GET("/manifest", func(c *gin.Context) {
		manifest := []App{}
		// Read the config file
		configFile := filepath.Join("./static", "config.json")
		jsonData, err := ioutil.ReadFile(configFile)
		if err != nil {
			fmt.Println("Error reading config file:", err)
			return
		}

		// Unmarshal JSON
		var config Config
		if err := json.Unmarshal([]byte(jsonData), &config); err != nil {
			fmt.Println("Error:", err)
			return
		}

		// Get the keys of the applications field
		for key, value := range config.Extensions {
			if key != "extensions" && key != "Wires" {
				manifest = append(manifest, value)
			}
		}
		c.JSON(http.StatusOK, gin.H{"manifest": manifest})
	})

	r.GET("/installed-apps", func(c *gin.Context) {
		installedApps := []string{}
		// Read the config file
		configFile := filepath.Join("./static", "config.json")
		jsonData, err := ioutil.ReadFile(configFile)
		if err != nil {
			fmt.Println("Error reading config file:", err)
			return
		}

		// Unmarshal JSON
		var config Config
		if err := json.Unmarshal([]byte(jsonData), &config); err != nil {
			fmt.Println("Error:", err)
			return
		}

		// Get the keys of the applications field
		for key := range config.Extensions {
			if key != "extensions" && key != "Wires" {
				installedApps = append(installedApps, key)
			}
		}
		c.JSON(http.StatusOK, gin.H{"installed_apps": installedApps})
	})

	// get the languages listed in the translations/flex folder
	r.GET("/languages", func(c *gin.Context) {
		languages := []string{}
		// Read the translations folder and list out the subfolders
		translationsFolder := filepath.Join("./static/translations", "flex")
		files, err := ioutil.ReadDir(translationsFolder)
		if err != nil {
			fmt.Println("Error reading flex folder:", err)
			return
		}

		// Get the names of the subfolders in the translations folder
		for _, file := range files {
			if file.IsDir() {
				languages = append(languages, file.Name())
			}
		}

		c.JSON(http.StatusOK, gin.H{"languages": languages})
	})

	// get the languages listed in the translations/flex folder
	r.GET("/extension-namespaces", func(c *gin.Context) {
		namespaces := []string{}
		// Read the translations folder and list out the subfolders
		translationsFolder := filepath.Join("./static", "translations")
		files, err := ioutil.ReadDir(translationsFolder)
		if err != nil {
			fmt.Println("Error reading translations folder:", err)
			return
		}

		// Get the names of the subfolders in the translations folder
		for _, file := range files {
			if file.IsDir() {
				namespaces = append(namespaces, file.Name())
			}
		}

		c.JSON(http.StatusOK, gin.H{"extensionNamespaces": namespaces})
	})

	// post new translations to the translations folder
	r.POST("/new-translations", func(c *gin.Context) {
		// Bind JSON request body to JSONRequest struct
		var jsonReq TranslationRequest
		if err := c.BindJSON(&jsonReq); err != nil {
			log.Println("Unable to parse JSON")
			c.JSON(http.StatusBadRequest, gin.H{"error": "Unable to parse JSON"})
			return
		}

		// json request contains two fields: extension name and data. Extension name will be the name of the folder
		// the first layer of data object contains all the language codes where the second layer contains the translations
		// Create the folder using the extension's name
		dirPath := filepath.Join("./static/translations", jsonReq.Name)
		
		// Use os.Mkdir to create a single directory
		err := os.Mkdir(dirPath, 0755)
		if err != nil {
			fmt.Println(err)
			return
		}
		// read the first layer of data object and create a folder for each language code
		// create a new json file named dictionary.json for each language code and write the translations to the file
		for langCode, translationData := range jsonReq.Data {
			dirPath := filepath.Join("./static/translations", jsonReq.Name, langCode)
			err := os.Mkdir(dirPath, 0755)
			if err != nil {
				fmt.Println(err)
				return
			}

			// create the dictionary.json file
			filePath := filepath.Join(dirPath, "dictionary.json")
			// Marshal the struct to JSON
			jsonTranslationData, err := json.MarshalIndent(translationData, "", "  ")
			if err != nil {
					fmt.Println(err)
					return
			}
	
			// Create the JSON file
			file, err := os.Create(filePath)
			if err != nil {
					fmt.Println(err)
					return
			}
			defer file.Close()
	
			// Write the JSON data to the file
			_, err = file.Write(jsonTranslationData)
			if err != nil {
					fmt.Println(err)
					return
			}
		}

		c.JSON(http.StatusOK, gin.H{"creation": "successful"})
	})

	// Define PUT endpoint to modify a static file
	r.PUT("/static/:filename", func(c *gin.Context) {
		filename := c.Param("filename")
		file := filepath.Join("./static", filename)

		// Check if file exists
		_, err := os.Stat(file)
		if os.IsNotExist(err) {
			c.JSON(http.StatusNotFound, gin.H{"error": "File not found"})
			return
		}

		// Read request body
		body, err := ioutil.ReadAll(c.Request.Body)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to read request body"})
			return
		}

		// Write content to file
		err = ioutil.WriteFile(file, body, 0644)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to write to file"})
			return
		}

		c.JSON(http.StatusOK, gin.H{"message": "File modified successfully"})
	})

	r.POST("/remove-app", func(c *gin.Context) {
		configFile := filepath.Join("./static", "config.json")

		// Bind JSON request body to RemoveAppName struct
		var appToRemove RemoveAppName
		if err := c.BindJSON(&appToRemove); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Unable to parse JSON"})
			return
		}

		// Read the config file
		jsonData, err := ioutil.ReadFile(configFile)
		if err != nil {
			fmt.Println("Error reading config file:", err)
			return
		}

		// Unmarshal JSON
		var config Config
		if err := json.Unmarshal([]byte(jsonData), &config); err != nil {
			fmt.Println("Error:", err)
			return
		}

		log.Println("appToRemove:", appToRemove)

		// Remove the app from the applications field
		delete(config.Extensions, appToRemove.AppName)

		// Marshal updated config to JSON
		updatedJSON, err := json.MarshalIndent(config, "", "  ")
		if err != nil {
			fmt.Println("Error:", err)
			return
		}

		// Write updated JSON to file
		if err := ioutil.WriteFile(configFile, updatedJSON, 0644); err != nil {
			fmt.Println("Error writing to config file:", err)
			return
		}

		// delete the app folder from the extensions folder
		appFolder := filepath.Join("./static/extensions", appToRemove.AppName)
		if err := os.RemoveAll(appFolder); err != nil {
			fmt.Println("Error deleting app folder:", err)
			return
		}

		c.JSON(http.StatusOK, gin.H{"message": "App removed successfully"})
	})

	r.POST("/upload", func(c *gin.Context) {
		// Bind JSON request body to JSONRequest struct
		var jsonReq JSONRequest
		if err := c.BindJSON(&jsonReq); err != nil {
			log.Println("Unable to parse JSON")
			c.JSON(http.StatusBadRequest, gin.H{"error": "Unable to parse JSON"})
			return
		}

		// Decode base64 string
		decoded, err := base64.StdEncoding.DecodeString(jsonReq.Data)
		if err != nil {
			log.Println("Unable to decode base64 string")
			c.JSON(http.StatusBadRequest, gin.H{"error": "Unable to decode base64 string"})
			return
		}

		// Create a temporary file
		tempFile, err := os.CreateTemp("", "upload-*.zip")
		if err != nil {
			log.Println("Unable to create temp file")
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to create temp file"})
			return
		}
		defer os.Remove(tempFile.Name())

		// Write the decoded data to the temp file
		if _, err := tempFile.Write(decoded); err != nil {
			log.Println("Unable to write to temp file")
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to write to temp file"})
			return
		}

		// Close the temp file so it can be read
		tempFile.Close()

		// Unzip the file
		if err := unzip(tempFile.Name(), "./static/extensions"); err != nil {
			log.Println("Unable to unzip file")
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to unzip file"})
			return
		}

		c.JSON(http.StatusOK, gin.H{"message": "File uploaded and unzipped successfully"})

		// update the micro-lc config file to host the micro-apps
		addNewApp(jsonReq)
	})

	// Run server
	r.Run(":4000")
}

func unzip(src, dest string) error {
	r, err := zip.OpenReader(src)
	if err != nil {
		return err
	}
	defer r.Close()

	for _, f := range r.File {
		fpath := filepath.Join(dest, f.Name)

		// Prevent Zip Slip vulnerability
		if !strings.HasPrefix(fpath, filepath.Clean(dest)+string(os.PathSeparator)) {
			return fmt.Errorf("%s: illegal file path", fpath)
		}

		if f.FileInfo().IsDir() {
			os.MkdirAll(fpath, os.ModePerm)
			continue
		}

		if err := os.MkdirAll(filepath.Dir(fpath), os.ModePerm); err != nil {
			return err
		}

		outFile, err := os.OpenFile(fpath, os.O_WRONLY|os.O_CREATE|os.O_TRUNC, f.Mode())
		if err != nil {
			return err
		}
		defer outFile.Close()

		rc, err := f.Open()
		if err != nil {
			return err
		}
		defer rc.Close()

		_, err = io.Copy(outFile, rc)
		if err != nil {
			return err
		}
	}
	return nil
}

func addNewApp(jsonReq JSONRequest) {
	// Read the config file
	configFile := filepath.Join("./static", "config.json")
	jsonData, err := ioutil.ReadFile(configFile)
	if err != nil {
		fmt.Println("Error reading config file:", err)
		return
	}

	// Unmarshal JSON
	var config Config
	if err := json.Unmarshal([]byte(jsonData), &config); err != nil {
		fmt.Println("Error:", err)
		return
	}

	// Inserting a new item in the applications field
	newExtension := App{
		Name:  jsonReq.Name,
		Entry: fmt.Sprintf("http://localhost:4000/extensions/%s/remoteEntry.js", jsonReq.Name),
		Icon:  jsonReq.IconName,
		Url:   jsonReq.AppURL,
	}
	config.Extensions[jsonReq.Name] = newExtension

	// Marshal updated config to JSON
	updatedJSON, err := json.MarshalIndent(config, "", "  ")
	if err != nil {
		fmt.Println("Error:", err)
		return
	}

	// Write updated JSON to file
	if err := ioutil.WriteFile(configFile, updatedJSON, 0644); err != nil {
		fmt.Println("Error writing to config file:", err)
		return
	}
}
