import axios from 'axios';
import { API_CONFIG } from '../config/api';

const api = axios.create({
  baseURL: API_CONFIG.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const generateAd = async (files: FormData, prompt: string) => {
  const formData = new FormData();
  Object.entries(files).forEach(([key, file]) => {
    if (file) formData.append(key, file);
  });
  formData.append('prompt', prompt);
  
  return api.post(API_CONFIG.endpoints.generate, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const getFiles = async () => {
  return api.get(API_CONFIG.endpoints.files);
};