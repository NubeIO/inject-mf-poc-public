
    export type RemoteKeys = 'flex_ui';
    type PackageType<T> = T extends 'flex_ui' ? typeof import('flex_ui') :any;