const express = require('express');
const router = express.Router();
const { generateSajuReading, processPayment } = require('../services/sajuService');

router.post('/generate-saju', async (req, res) => {
  try {
    const result = await generateSajuReading(req.body);
    res.json(result);
  } catch (error) {
    console.error('Error generating saju:', error);
    res.status(500).json({ error: '사주 생성 중 오류가 발생했습니다.' });
  }
});

router.post('/process-payment', async (req, res) => {
  try {
    const result = await processPayment(req.body);
    res.json(result);
  } catch (error) {
    console.error('Payment processing error:', error);
    res.status(500).json({ error: '결제 처리 중 오류가 발생했습니다.' });
  }
});

module.exports = router;