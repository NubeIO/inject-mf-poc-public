
    export type RemoteKeys = 'flex_japanese';
    type PackageType<T> = T extends 'flex_japanese' ? typeof import('flex_japanese') :any;