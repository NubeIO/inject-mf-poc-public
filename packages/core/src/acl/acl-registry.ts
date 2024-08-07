import { Authorizer } from "casbin.js";
import { injectable } from "inversify";
import { create } from "zustand";

import { Store } from "../common";

export type ACLStore = {
  readonly authorizer: Authorizer;
  readonly permissions: Record<string, any>;
  setRules: (rules: Record<string, string[]>) => void;
};

@injectable()
export class ACLRegistry implements ACLStore, Store<ACLStore> {
  private _defineRules(rules: Record<string, string[]>): Record<string, any> {
    const builtPerms: Record<string, any> = {};

    Object.entries(rules).forEach(([key, value]) => {
      builtPerms[key] = [...(builtPerms[key] || []), ...value];
    });

    return builtPerms;
  }

  private store = create<ACLStore>((set) => ({
    authorizer: new Authorizer("manual"),
    permissions: {},
    setRules: (rules: Record<string, string[]>) => {
      const permissions = this._defineRules(rules);
      const authorizer = new Authorizer("manual");
      authorizer.setPermission(permissions);
      return set(() => ({
        permissions: permissions,
        authorizer: authorizer,
      }));
    },
  }));

  get permissions() {
    return this.getState().permissions;
  }

  get authorizer() {
    return this.getState().authorizer;
  }

  can(action: string, subject: string): boolean {
    return this.authorizer.permission?.check(action, subject) ?? false;
  }

  setRules = (rules: Record<string, string[]>) =>
    this.getState().setRules(rules);

  useStore(): ACLStore {
    return this.store();
  }

  getState(): ACLStore {
    return this.store.getState();
  }

  subscribe = (listener: (state: ACLStore, prevState: ACLStore) => void) =>
    this.store.subscribe(listener);
}
