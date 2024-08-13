import "reflect-metadata";

import { beforeEach, describe, expect, it, jest, test } from "@jest/globals";
import { Container } from "inversify";

import { FrontEndApplication, TYPES } from "../common";
import { AclService } from "./acl-service";

describe("Testy test", () => {
  let container: Container;
  let aclService: AclService;

  beforeEach(() => {
    container = new Container();

    container.bind(TYPES.AclService).to(AclService).inSingletonScope();

    aclService = container.get(TYPES.AclService);
  });

  it("works", () => {
    const ability = aclService.getAbility;
    expect(ability.can("delete", "points")).toBe(false);

    aclService.updatePermissions([{ action: "manage", subject: "all" }]);
    expect(ability.can("delete", "points")).toBe(true);
  });
});
