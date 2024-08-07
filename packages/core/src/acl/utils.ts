export type User = {
  username: string;
  roles: Array<string>;
};

export const users: Record<string, User> = {
  basicUser: {
    username: "Jill",
    roles: [],
  },
  ITUser: {
    username: "Mary",
    roles: ["IT"],
  },
  ITAndMarketing: {
    username: "Jack",
    roles: ["marketing", "IT"],
  },
  superUser: {
    username: "Jake",
    roles: ["superuser"],
  },
};
