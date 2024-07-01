
    export type RemoteKeys = 'flex_ui/button' | 'flex_ui/module' | 'flex_ui/frontend-application';
    type PackageType<T> = T extends 'flex_ui/frontend-application' ? typeof import('flex_ui/frontend-application') :T extends 'flex_ui/module' ? typeof import('flex_ui/module') :T extends 'flex_ui/button' ? typeof import('flex_ui/button') :any;