import React, { ReactNode } from "react";

import { casbinAuthorizer } from "./config";

type Props = {
  children: ReactNode;
  action: string;
  subject: string;
};

export function can(action: string, subject: string) {
  return casbinAuthorizer.permission!.check(action, subject);
}

export const Can: React.FC<Props> = ({ children, action, subject }) => {
  const [render, setRender] = React.useState(false);

  React.useEffect(() => {
    (async function () {
      const shouldRender = can(action, subject);
      console.log("shouldRender", shouldRender);
      setRender(shouldRender);
    })();
  }, [action, subject, casbinAuthorizer.user]);

  if (render) return <>{children}</>;

  return null;
};
