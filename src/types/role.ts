import type { PermissionType } from "./permission";

export type RoleType = {
  id: number;
  name: string;
  description: string;
  status: boolean;
  permissions?: PermissionType[];
};