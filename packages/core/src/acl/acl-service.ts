import React from "react";
import { AbilityBuilder, createMongoAbility } from "@casl/ability";
import EventEmitter from "eventemitter3";
import { inject, injectable } from "inversify";

@injectable()
export class AclService {
  readonly ability: any;

  constructor() {
    this.ability = createMongoAbility([
      {
        action: "read",
        subject: "Post",
      },
      {
        inverted: true,
        action: "delete",
        subject: "Post",
        conditions: { published: true },
      },
    ]);
  }

  get getAbility(): any {
    return this.ability;
  }
}
