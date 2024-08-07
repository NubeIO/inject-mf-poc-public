import { Authorizer } from "casbin.js";

import { User } from "./utils";

// can be defined in a JSON or database to allow
const permDefs = {
  marketing: {
    read: ["MarketingView", "Proposal"],
  },
  IT: {
    read: ["Contact", "Database"],
    delete: ["Database"],
  },
};

export const casbinAuthorizer = new Authorizer("manual");

export function defineRulesFor(user: User) {
  // superUser roles definition
  const builtPerms: Record<string, any> = {};

  // perms should be of format
  // { 'read': ['Contact', 'Database']}
  user.roles.forEach((role) => {
    const permissions = permDefs[role as keyof typeof permDefs];
    Object.entries(permissions).forEach(([key, value]) => {
      builtPerms[key] = [...(builtPerms[key] || []), ...value];
    });
  });
  casbinAuthorizer.setPermission(builtPerms);
}
