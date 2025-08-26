import type { RoleType } from "./role";

export type UserType = {
  id: number;
  name: string;
  email: string;
  status: boolean;
  avatar?: string;
  createdAt?: string;
  updatedAt?: string;
  role_id?: number;
  role_name?: string;
  role?: RoleType;
};