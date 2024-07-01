import { ReactNode } from "react";
import { URI } from "vscode-uri";

import { Widget } from "../common";

interface NotFoundWidgetOpenerOptions {
  uri: URI;
}

export default class NotFoundComponent implements Widget {
  static readonly ID = "widget:not-found";

  public get name() {
    const { uri } = this.options;

    return `Not Found: ${uri.scheme}`;
  }
  constructor(private options: NotFoundWidgetOpenerOptions) {}

  render(): ReactNode {
    const { uri } = this.options;
    const decodedUri = decodeURIComponent(uri.toString());

    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <p className="mb-4 text-2xl font-bold">404 Not Found</p>
        <p className="mb-4">
          The URI <span className="italic">{decodedUri}</span> was not found.
        </p>
      </div>
    );
  }
}
