import type { RoleType } from "@/types/role";
import client from "../api";

export type CreateRoleDto = {
    name: string;
    description?: string;
    status?: boolean; // optional boolean
}

export type UpdateRoleDto = {
    name?: string;
    description?: string;
    status?: boolean; // optional boolean
};

export class RoleService {
    async getAll(): Promise<RoleType[]> {
        const { data } = await client.get<RoleType[]>('/roles');
        return data;
    }

    async getById(id: number): Promise<RoleType> {
        const { data } = await client.get<RoleType>(`/roles/${id}`);
        return data;
    }

    async create(role: CreateRoleDto): Promise<RoleType> {
        const isFormData = role instanceof FormData;
        const { data } = await client.post<RoleType>("/roles", role, {
            headers: isFormData ? { "Content-Type": "multipart/form-data" } : undefined,
        });
        return data;
    }

    async update(id: number, role: UpdateRoleDto | FormData): Promise<RoleType> {
        const isFormData = role instanceof FormData;
        const { data } = await client.patch<RoleType>(`/roles/${id}`, role, {
            headers: isFormData ? { "Content-Type": "multipart/form-data" } : undefined,
        });
        return data;
    }

    async delete(id: number): Promise<void> {
        await client.delete(`/roles/${id}`);
    }
}

export const roleService = new RoleService();