import type { UserType } from "@/types/users";
import client from "../api";

// For creating a user
export type CreateUserDto = {
  name: string;
  email: string;
  password: string;
  role_id?: number;
  status?: boolean; // optional boolean
  avatar?: string;
};

// For updating user (except password)
export type UpdateUserDto = Partial<Omit<CreateUserDto, "password">>;

// For updating password
export type UpdatePasswordDto = {
  oldPassword: string;
  newPassword: string;
};

export type SetupRole = {
  id: number;
  name: string;
}


export class UserService {

  async setupRole() {
    const { data } = await client.get<SetupRole[]>("/roles/setup");
    return data
  }
  async getAll(): Promise<UserType[]> {
    const { data } = await client.get<UserType[]>("/users");
    return data;
  }

  async getById(id: number): Promise<UserType> {
    const { data } = await client.get<UserType>(`/users/${id}`);
    return data;
  }

  // Create user, supports file upload
  async create(user: CreateUserDto | FormData): Promise<UserType> {
    // If sending FormData, don't stringify
    const isFormData = user instanceof FormData;
    const { data } = await client.post<UserType>("/users", user, {
      headers: isFormData ? { "Content-Type": "multipart/form-data" } : undefined,
    });
    return data;
  }

  // Update user, supports file upload
  async update(id: number, user: UpdateUserDto | FormData): Promise<UserType> {
    const isFormData = user instanceof FormData;
    const { data } = await client.patch<UserType>(`/users/${id}`, user, {
      headers: isFormData ? { "Content-Type": "multipart/form-data" } : undefined,
    });
    return data;
  }

  async delete(id: number): Promise<void> {
    await client.delete(`/users/${id}`);
  }

  async updatePassword(id: number, dto: UpdatePasswordDto): Promise<void> {
    await client.patch(`/users/${id}/password`, dto);
  }

  async updateRole(id: number, role_id: number): Promise<void> {
    await client.patch(`/users/${id}/role`, { role_id });
  }

  async getSessions(id: number): Promise<any[]> {
    const { data } = await client.get(`/users/${id}/sessions`);
    return data;
  }
}

export const userService = new UserService();