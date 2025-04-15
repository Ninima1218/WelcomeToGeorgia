import { createApi } from 'unsplash-js';

// Initialize the Unsplash API client with the access key
const unsplashApi = createApi({
  accessKey: import.meta.env.UNSPLASH_ACCESS_KEY,
});

// Categories of photos to search for
const SEARCH_CATEGORIES = {
  GEORGIA: 'georgia country',
  TBILISI: 'tbilisi',
  BATUMI: 'batumi georgia',
  MOUNTAINS: 'caucasus mountains',
  WINE: 'georgian wine',
  FOOD: 'georgian food',
  LANDSCAPE: 'georgian landscape',
  CULTURE: 'georgian culture',
};

/**
 * Get photos based on a search query
 * @param query Search query
 * @param page Page number (optional)
 * @param perPage Number of photos per page (optional)
 * @returns Promise with photos data
 */
export const getPhotosByQuery = async (
  query: string, 
  page: number = 1, 
  perPage: number = 10
) => {
  try {
    const result = await unsplashApi.search.getPhotos({
      query,
      page,
      perPage,
      orientation: 'landscape',
    });

    if (result.errors) {
      console.error('Error fetching photos from Unsplash:', result.errors);
      return { photos: [], total: 0 };
    }

    return {
      photos: result.response.results,
      total: result.response.total,
    };
  } catch (error) {
    console.error('Error fetching photos from Unsplash:', error);
    return { photos: [], total: 0 };
  }
};

/**
 * Get photos for a specific predefined category
 * @param category Category name from SEARCH_CATEGORIES
 * @param page Page number (optional)
 * @param perPage Number of photos per page (optional)
 * @returns Promise with photos data
 */
export const getPhotosByCategory = async (
  category: keyof typeof SEARCH_CATEGORIES,
  page: number = 1,
  perPage: number = 10
) => {
  const query = SEARCH_CATEGORIES[category];
  return getPhotosByQuery(query, page, perPage);
};

/**
 * Get random Georgian photos
 * @param count Number of photos to get
 * @returns Promise with photos data
 */
export const getRandomGeorgianPhotos = async (count: number = 5) => {
  try {
    const result = await unsplashApi.photos.getRandom({
      query: 'georgia country',
      count,
    });

    if (result.errors) {
      console.error('Error fetching random photos from Unsplash:', result.errors);
      return [];
    }

    // Ensure we always work with an array of photos
    const photos = Array.isArray(result.response) 
      ? result.response 
      : [result.response];
      
    return photos;
  } catch (error) {
    console.error('Error fetching random photos from Unsplash:', error);
    return [];
  }
};

export default {
  getPhotosByQuery,
  getPhotosByCategory,
  getRandomGeorgianPhotos,
  SEARCH_CATEGORIES,
};