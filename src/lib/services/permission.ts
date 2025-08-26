import client from "../api";
import type { PermissionType } from "@/types/permission";

export type CreatePermissionDto = {
  name: string;
  description?: string;
  status?: boolean;
}

export type UpdatePermissionDto = {
  name?: string;
  description?: string;
  status?: boolean;
};

export class PermissionService {
  async getAll(): Promise<PermissionType[]> {
    const { data } = await client.get<PermissionType[]>('/permissions');
    return data;
  }

  async getById(id: number): Promise<PermissionType> {
    const { data } = await client.get<PermissionType>(`/permissions/${id}`);
    return data;
  }

  async create(permission: { name: string; description?: string }): Promise<PermissionType> {
    const isFormData = permission instanceof FormData;
    const { data } = await client.post<PermissionType>("/permissions", permission, {
      headers: isFormData ? { "Content-Type": "multipart/form-data" } : undefined,
    });
    return data;
  }

  async update(id: number, permission: UpdatePermissionDto | FormData ): Promise<PermissionType> {
    const isFormData = permission instanceof FormData;
    const { data } = await client.patch<PermissionType>(`/permissions/${id}`, permission, {
      headers: isFormData ? { "Content-Type": "multipart/form-data" } : undefined,
    });
    return data;
  }

  async delete(id: number): Promise<void> {
    await client.delete(`/permissions/${id}`);
  }
}

export const permissionService = new PermissionService();