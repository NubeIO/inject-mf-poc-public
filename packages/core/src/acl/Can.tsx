import React, { ReactNode } from "react";

import { TYPES, useStore } from "../common";
import { ACLRegistry } from "./acl-registry";
import { ACLPermission } from "./types";

type PropsWithPermission = {
  children: ReactNode;
  permission?: ACLPermission;
  action?: never;
  subject?: never;
};

type PropsWithActionSubject = {
  children: ReactNode;
  permission?: never;
  action: string;
  subject: string;
};

type Props = PropsWithPermission | PropsWithActionSubject;

export const Can: React.FC<Props> = ({
  children,
  action,
  subject,
  permission,
}) => {
  const [render, setRender] = React.useState(false);
  const aclRegistry = useStore<ACLRegistry>(TYPES.ACLRegistry);

  React.useEffect(() => {
    (async function () {
      let shouldRender = false;
      if (permission !== undefined) {
        shouldRender = await aclRegistry.can(permission);
      } else if (action !== undefined && subject !== undefined) {
        shouldRender = await aclRegistry.can(action, subject);
      } else {
        shouldRender = true;
      }
      setRender(shouldRender);
    })();
  }, [action, subject, aclRegistry.authorizer]);

  if (render) return <>{children}</>;

  return null;
};
