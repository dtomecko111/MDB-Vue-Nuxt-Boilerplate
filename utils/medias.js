const strapiBaseUri = process.env.API_URL || "https://cvstrapi.cve.so";
export function getStrapiMedia(url) {
  // Check if URL is a local path
  if (url.startsWith("/")) {
    // Prepend Strapi address
    return `${strapiBaseUri}${url}`;
  }
  // Otherwise return full URL
  return url;
}