export type RemoteKeys =
  | "flex_business/button"
  | "flex_business/module"
  | "flex_business/frontend-application";
type PackageType<T> = T extends "flex_business/frontend-application"
  ? typeof import("flex_business/frontend-application")
  : T extends "flex_business/module"
    ? typeof import("flex_business/module")
    : T extends "flex_business/button"
      ? typeof import("flex_business/button")
      : any;
