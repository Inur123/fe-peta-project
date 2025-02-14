// config/api.ts
const API_BASE_URL = 'http://achieved.zainur.my.id/api';
const IMAGE_BASE_URL = 'http://achieved.zainur.my.id/storage'; // Base URL untuk gambar

export const API_ENDPOINTS = {
  HOME: `${API_BASE_URL}/home`,
  BERITA: `${API_BASE_URL}/berita`,
  OPINI: `${API_BASE_URL}/opini`,
  PODCAST: `${API_BASE_URL}/podcast`,
};

export const IMAGE_URLS = {
  THUMBNAIL: `${IMAGE_BASE_URL}/`, // Base URL untuk thumbnail
  IKLAN: `${IMAGE_BASE_URL}/`,// Base URL khusus untuk gambar iklan
};