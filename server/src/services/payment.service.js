const axios = require('axios');
const config = require('../config/config');

async function createPayment(orderData) {
  try {
    // 토스페이먼츠 API 연동
    const response = await axios.post('https://api.tosspayments.com/v1/payments', {
      amount: orderData.amount,
      orderId: orderData.orderId,
      orderName: orderData.orderName,
      successUrl: `${config.clientUrl}/payment/success`,
      failUrl: `${config.clientUrl}/payment/fail`,
    }, {
      headers: {
        Authorization: `Basic ${config.paymentSecret}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('결제 생성 오류:', error);
    throw error;
  }
}

module.exports = {
  createPayment
}; 