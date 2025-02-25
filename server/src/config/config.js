require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5000,
  openaiApiKey: process.env.OPENAI_API_KEY,
  nodeEnv: process.env.NODE_ENV || 'development',
  clientUrl: process.env.CLIENT_URL || 'http://localhost:3000',
  paymentSecret: process.env.PAYMENT_SECRET,
  mongodbUri: process.env.MONGODB_URI,
  // 기타 설정...
}; 