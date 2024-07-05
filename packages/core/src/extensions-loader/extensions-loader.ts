import { init, loadRemote } from "@module-federation/enhanced/runtime";
import axios from "axios";
import { injectable } from "inversify";

import { Manifest, ManifestChangeListener } from "./extensions-type";

@injectable()
export class ExtensionsLoader {
  protected manifest: Manifest[] = [];
  private manifestChangeListeners = new Set<ManifestChangeListener>();

  constructor() {
    this.loadExtensions();
  }

  get getManifest(): Manifest[] {
    return this.manifest;
  }

  async loadExtensions() {
    const response: any = await axios.get("http://localhost:4000/manifest");
    if (!response || !response?.data?.manifest) return;
    const manifest: Manifest[] = response?.data?.manifest;

    await init({
      name: "host",
      remotes: manifest,
    });

    this.manifest = manifest;
    this.notifyLayoutChangeListeners();
  }

  onManifestChange(listener: ManifestChangeListener): void {
    this.manifestChangeListeners.add(listener);
  }
  removeOnManifestChange(listener: ManifestChangeListener): void {
    this.manifestChangeListeners.delete(listener);
  }
  private notifyLayoutChangeListeners(): void {
    // notify all listeners
    for (const listener of this.manifestChangeListeners) {
      listener();
    }
  }
}
