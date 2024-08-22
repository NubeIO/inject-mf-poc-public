
    export type RemoteKeys = 'flex_business';
    type PackageType<T> = T extends 'flex_business' ? typeof import('flex_business') :any;