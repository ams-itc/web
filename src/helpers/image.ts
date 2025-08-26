import { getEnvs } from "@/config/env";

export function getImageUrl(imagePath?: string): string {
    const { imageUrl } = getEnvs();
    // Fallback placeholder
    if (!imagePath) return "/images/default-avatar.jpg";

    // External image URL
    if (/^https?:\/\//i.test(imagePath)) return imagePath;

    // Ensure base URL ends without slash and path starts without slash
    const baseUrl = imageUrl?.replace(/\/$/, "") || "";
    const normalizedPath = imagePath.replace(/^\/+/, "");

    return `${baseUrl}/${normalizedPath}`;
}