import React, { ReactNode } from "react";

import { TYPES, useStore } from "../common";
import { ACLRegistry } from "./acl-registry";

type Props = {
  children: ReactNode;
  action: string;
  subject: string;
};

export const Can: React.FC<Props> = ({ children, action, subject }) => {
  const [render, setRender] = React.useState(false);
  const aclRegistry = useStore<ACLRegistry>(TYPES.ACLRegistry);

  React.useEffect(() => {
    (async function () {
      const shouldRender = aclRegistry.can(action, subject);
      console.log("shouldRender", shouldRender);
      setRender(shouldRender);
    })();
  }, [action, subject, aclRegistry.authorizer]);

  if (render) return <>{children}</>;

  return null;
};
