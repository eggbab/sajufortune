const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config/config');
const sajuRoutes = require('./routes/sajuRoutes');
const mongoose = require('mongoose');

const app = express();

// 미들웨어 설정
app.use(cors({
  origin: config.clientUrl,
  credentials: true
}));
app.use(bodyParser.json());

// 라우트 설정
app.use('/api', sajuRoutes);

// 기본 라우트
app.get('/', (req, res) => {
  res.send('사주 해석 API 서버가 실행 중입니다.');
});

// MongoDB 연결
<<<<<<< HEAD
mongoose.connect(config.mongodbUri);
=======
mongoose.connect(config.mongodbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB에 연결되었습니다.'))
.catch(err => console.error('MongoDB 연결 오류:', err));
>>>>>>> 1ed7a297753494b1caba2a7df1bd3523b91ba3ee

module.exports = app;