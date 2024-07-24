
    export type RemoteKeys = 'flex_japanese/module';
    type PackageType<T> = T extends 'flex_japanese/module' ? typeof import('flex_japanese/module') :any;