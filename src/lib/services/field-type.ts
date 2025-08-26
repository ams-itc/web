import axios from "axios";

export interface FieldType {
  id: number;
  name: string;
  has_options: boolean;
  is_relation: boolean;
  length?: number;
  precision?: number;
  scale?: number;
}

const BASE_URL = "/cms/field-types";

export const fieldTypeService = {
  getAll: async (): Promise<FieldType[]> => {
    const res = await axios.get(BASE_URL);
    return res.data;
  },

  getById: async (id: number): Promise<FieldType> => {
    const res = await axios.get(`${BASE_URL}/${id}`);
    return res.data;
  },
};