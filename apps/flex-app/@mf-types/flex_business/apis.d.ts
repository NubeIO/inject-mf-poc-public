
    export type RemoteKeys = 'flex_business/button';
    type PackageType<T> = T extends 'flex_business/button' ? typeof import('flex_business/button') :any;