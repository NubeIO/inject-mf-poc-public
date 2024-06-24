export type RemoteKeys = "flex_ui/button";
type PackageType<T> = T extends "flex_ui/button"
  ? typeof import("flex_ui/button")
  : any;
