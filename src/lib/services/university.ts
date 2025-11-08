import api from "../api";
export interface Entity {
  id: number;
  slug: string;
  name?: string;
  [key: string]: any; 
}

export type UnviersitySlug =
  | "university"
  | "faculty"
  | "category"
  | "course"
  | "student"
  | "profile"
  | "user"
  | "event"
  | "news"
  | "feature_news"
  | "student_abroad"
  | "award"
  | "project"
  | "academic_calendar"
  | "course_categories"
  | "alumni"
  | "outstanding_student"
  | "trustees"
  | "ongoing_project"
  | string; 

const BASE = "/cms/contents/university"

function normalizeEntity<T extends Record<string, any>>(item: T, fallbackSlug: string = ""): Entity {
  if (!item || typeof item !== 'object') {
    return {
      id: -1,
      slug: fallbackSlug,
      name: "Invalid Data",
    };
  }

  return {
    id: item.id ?? item._id ?? -1,
    slug: item.slug || fallbackSlug || "",
    name: item.name || item.title || item.label || String(item.id) || "Unnamed",
    ...item, 
  };
}

export const universityService = {
  async getAll(slug: UnviersitySlug, params?: Record<string, any>): Promise<Entity[]> {
    if (!slug) throw new Error("Slug is required");
    const endpoint = `${BASE}/${slug}`;
    try {
      console.log(`[universityService] Fetching from: ${endpoint}`, { params });
      const response = await api.get(endpoint, { params });
      const data = response.data;
      
      console.log(`[universityService] Raw response for ${slug}:`, data);
      
      let entities: any[] = [];
      if (Array.isArray(data)) {
        entities = data;
      } else if (data && typeof data === 'object' && Array.isArray(data.data)) {
        entities = data.data;
      } else if (data && typeof data === 'object' && data.items) {
        entities = Array.isArray(data.items) ? data.items : [data.items];
      }
      
      const normalized = entities.map((item) => normalizeEntity(item, slug));
      console.log(`[universityService] Normalized entities for ${slug}:`, normalized);
      
      return normalized;
    } catch (error: any) {
      console.error(`[universityService.getAll] Failed to fetch ${slug}:`, error);
      console.error(`[universityService.getAll] Error details:`, {
        message: error?.message,
        response: error?.response?.data,
        status: error?.response?.status
      });
      
      return [];
    }
  },

  async getOne(slug: UnviersitySlug, id: number): Promise<Entity> {
    if (!slug) throw new Error("Slug is required");
    if (!id) throw new Error("ID is required");
    
    const endpoint = `${BASE}/${slug}/${id}`;
    try {
      console.log(`[universityService] Fetching single item from: ${endpoint}`);
      const { data } = await api.get(endpoint);
      console.log(`[universityService] Raw single item response:`, data);
      
      return normalizeEntity(data, slug);
    } catch (error: any) {
      console.error(`[universityService.getOne] Failed to fetch ${slug} #${id}:`, error);
      console.error(`[universityService.getOne] Error details:`, {
        message: error?.message,
        response: error?.response?.data,
        status: error?.response?.status
      });
      throw error;
    }
  },

  async create(slug: UnviersitySlug, payload: Partial<Entity>): Promise<Entity> {
    if (!slug) throw new Error("Slug is required");
    
    const normalizedPayload = {
      ...payload,
      slug: payload.slug || slug,
      name: payload.name || payload.title,
    };
    
    try {
      console.log(`[universityService] Creating item in: ${BASE}/${slug}`, normalizedPayload);
      const { data } = await api.post(`${BASE}/${slug}`, normalizedPayload);
      console.log(`[universityService] Create response:`, data);
      
      return normalizeEntity(data, slug);
    } catch (error: any) {
      console.error(`[universityService.create] Failed to create in ${slug}:`, error);
      console.error(`[universityService.create] Error details:`, {
        message: error?.message,
        response: error?.response?.data,
        status: error?.response?.status
      });
      throw error;
    }
  },

  async update(slug: UnviersitySlug, id: number, payload: Partial<Entity>): Promise<Entity> {
    if (!slug) throw new Error("Slug is required");
    if (!id) throw new Error("ID is required");
    
    const normalizedPayload = {
      ...payload,
      slug: payload.slug || slug,
      name: payload.name || payload.title,
    };
    
    try {
      console.log(`[universityService] Updating item: ${BASE}/${slug}/${id}`, normalizedPayload);
      const { data } = await api.put(`${BASE}/${slug}/${id}`, normalizedPayload);
      console.log(`[universityService] Update response:`, data);
      
      return normalizeEntity(data, slug);
    } catch (error: any) {
      console.error(`[universityService.update] Failed to update ${slug} #${id}:`, error);
      console.error(`[universityService.update] Error details:`, {
        message: error?.message,
        response: error?.response?.data,
        status: error?.response?.status
      });
      throw error;
    }
  },

  async delete(slug: UnviersitySlug, id: number): Promise<void> {
    if (!slug) throw new Error("Slug is required");
    if (!id) throw new Error("ID is required");
    
    try {
      console.log(`[universityService] Deleting item: ${BASE}/${slug}/${id}`);
      const response = await api.delete(`${BASE}/${slug}/${id}`);
      console.log(`[universityService] Delete response:`, response);
    } catch (error: any) {
      console.error(`[universityService.delete] Failed to delete ${slug} #${id}:`, error);
      console.error(`[universityService.delete] Error details:`, {
        message: error?.message,
        response: error?.response?.data,
        status: error?.response?.status
      });
      throw error;
    }
  },
};
