const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const sajuRoutes = require('./routes/sajuRoutes');
const talismanRoutes = require('./routes/talismanRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// 미들웨어
app.use(cors());
app.use(express.json());

// 정적 파일 제공
app.use(express.static(path.join(__dirname, '../../client/build')));

// API 라우트
app.use('/api/saju', sajuRoutes);
app.use('/api/talisman', talismanRoutes);
app.use('/api/payment', paymentRoutes);

// 모든 요청을 React 앱으로 전달
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});