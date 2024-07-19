import { init, loadRemote } from "@module-federation/enhanced/runtime";
import axios from "axios";
import { injectable } from "inversify";
import { create, StoreApi, UseBoundStore } from "zustand";



import { Manifest, ManifestChangeListener } from "./extensions-type";

@injectable()
export class ExtensionsLoader {
  // protected manifest: Manifest[] = [];
  // private manifestChangeListeners = new Set<ManifestChangeListener>();

  private extensionLoaderStore = create<any>((set: any) => ({
    manifest: [],
    setManifest: (input: Manifest[]) => set({ manifest: input }),
  }));

  constructor() {
    this.loadExtensions();
  }

  get getManifest(): Manifest[] {
    return this.extensionLoaderStore.getState().manifest;
  }

  setManifest(input: Manifest[]): void {
    this.extensionLoaderStore.setState({ manifest: input });
  }

  async loadExtensions() {
    const response: any = await axios.get("http://localhost:4000/manifest");
    if (!response || !response?.data?.manifest) return;
    const manifest: Manifest[] = response?.data?.manifest;

    console.log("manifest is: ", manifest);

    await init({
      name: "host",
      remotes: manifest,
    });

    this.setManifest(manifest);
    // this.manifest = manifest;
    // this.notifyLayoutChangeListeners();
    // console.log("manifest is: ", manifest);
  }

  onManifestChange(listener: any): void {
    this.extensionLoaderStore.subscribe(listener);
  }

  // onManifestChange(listener: ManifestChangeListener): void {
  //   this.manifestChangeListeners.add(listener);
  // }
  // removeOnManifestChange(listener: ManifestChangeListener): void {
  //   this.manifestChangeListeners.delete(listener);
  // }
  // private notifyLayoutChangeListeners(): void {
  //   // notify all listeners
  //   for (const listener of this.manifestChangeListeners) {
  //     listener();
  //   }
  // }
}