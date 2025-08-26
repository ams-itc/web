import api from '../api'

export interface ContentField {
  id: number;
  content_type_id: number;
  name: string;
  field_type_id: number;
  is_required: boolean;
  options?: string[];
  length?: number;
  precision?: number;
  scale?: number;
  relation_target?: string;
  default_value?: string;
  relation_type?: string;
  fieldType?: { id: number; name: string }; // optional included for UI
}

const BASE_URL = "/cms/contents/content-fields";

export const contentFieldService = {
  getAll: async (): Promise<ContentField[]> => {
    const res = await api.get(BASE_URL);
    return res.data;
  },

  getById: async (id: number): Promise<ContentField> => {
    const res = await api.get(`${BASE_URL}/${id}`);
    return res.data;
  },

  getByContentType: async (contentTypeId: number): Promise<ContentField[]> => {
    const res = await api.get(`${BASE_URL}?contentTypeId=${contentTypeId}`);
    return res.data;
  },

  create: async (payload: Partial<ContentField>): Promise<ContentField> => {
    const res = await api.post(BASE_URL, payload);
    return res.data;
  },

  update: async (id: number, payload: Partial<ContentField>): Promise<ContentField> => {
    const res = await api.put(`${BASE_URL}/${id}`, payload);
    return res.data;
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`${BASE_URL}/${id}`);
  },
};