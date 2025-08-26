import api from "../api";

export interface ContentType {
  id: number;
  name: string;
  table_name: string;
  slug: string;
  description?: string;
  created_by?: number;
  createdAt?: string;
}

export const contentTypeService = {
  async getAll(): Promise<ContentType[]> {
    const { data } = await api.get("/cms/contents/content-types");
    return data;
  },

  async getById(id: number): Promise<ContentType> {
    const { data } = await api.get(`/cms/contents/content-types/${id}`);
    return data;
  },

  async create(payload: Partial<ContentType>): Promise<ContentType> {
    const { data } = await api.post("/cms/contents/content-types", payload);
    return data;
  },

  async update(id: number, payload: Partial<ContentType>): Promise<ContentType> {
    const { data } = await api.put(`/cms/contents/content-types/${id}`, payload);
    return data;
  },

  async delete(id: number): Promise<void> {
    await api.delete(`/cms/contents/content-types/${id}`);
  },
};