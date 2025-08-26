import client from "../api";

class DashboardService {
  /**
   * Fetch dashboard overview stats from backend
   */
  async getOverview() {
    try {
      const response = await client.get("/dashoard/overview");
      return response.data; // { totalContents, publishedCount, draftCount, totalMedia, totalTags }
    } catch (error: any) {
      console.error("Failed to fetch dashboard overview:", error);
      throw error;
    }
  }
}

export const dashboardService = new DashboardService();