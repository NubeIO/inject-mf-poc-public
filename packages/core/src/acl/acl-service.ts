;
// import React from "react";
import { AbilityBuilder, createMongoAbility } from "@casl/ability";
import { inject, injectable } from "inversify";



import { guestPermissions } from "./default-permissions";


@injectable()
export class AclService {
  readonly ability: any;

  constructor() {
    this.ability = createMongoAbility(guestPermissions);
  }

  get getAbility(): any {
    return this.ability;
  }

  updatePermissions(permissions: any): void {
    this.ability.update(permissions);
  }
}
