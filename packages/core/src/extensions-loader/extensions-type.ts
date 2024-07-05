export type Manifest = {
  entry: string;
  name: string;
  icon: string;
  url: string;
};

export type ManifestChangeListener = () => void;
