import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

export const sajuApi = {
  generateSaju: async (formData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/generate-saju`, formData);
      return response.data;
    } catch (error) {
      throw new Error('사주 생성 중 오류가 발생했습니다.');
    }
  },

  processPayment: async (paymentData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/process-payment`, paymentData);
      return response.data;
    } catch (error) {
      throw new Error('결제 처리 중 오류가 발생했습니다.');
    }
  }
};