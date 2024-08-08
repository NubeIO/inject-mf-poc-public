export interface ACLPermission {
  action: string;
  subject: string;
}
export namespace ACLPermission {
  export function is(permission: any): permission is ACLPermission {
    return (
      typeof permission === "object" &&
      permission !== null &&
      "action" in permission &&
      "subject" in permission
    );
  }
}
