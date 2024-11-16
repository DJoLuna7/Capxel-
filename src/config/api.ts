export const API_CONFIG = {
  baseURL: process.env.VITE_API_URL || 'http://localhost:8000',
  endpoints: {
    generate: '/api/generate',
    files: '/api/files',
  }
};