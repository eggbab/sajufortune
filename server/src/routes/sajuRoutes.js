const express = require('express');
const router = express.Router();
const sajuService = require('../services/sajuService');

// 사주 분석 API
router.post('/analyze', async (req, res) => {
  try {
    const { name, birthDate, birthTime, gender, concern } = req.body;
    
    if (!name || !birthDate) {
      return res.status(400).json({ error: '필수 정보가 누락되었습니다.' });
    }
    
    const result = await sajuService.analyzeSaju(birthDate, birthTime, gender, concern);
    
    res.json({
      userData: { name, birthDate, birthTime, gender, concern },
      sajuResult: result
    });
  } catch (error) {
    console.error('사주 분석 오류:', error);
    res.status(500).json({ error: '사주 분석 중 오류가 발생했습니다.' });
  }
});

// 부적 생성 API
router.post('/generate-talisman', async (req, res) => {
  try {
    const { userData, sajuResult } = req.body;
    
    if (!userData || !sajuResult) {
      return res.status(400).json({ error: '필수 정보가 누락되었습니다.' });
    }
    
    const talismanResult = await sajuService.generateTalisman(userData, sajuResult);
    
    res.json({
      talismanResult
    });
  } catch (error) {
    console.error('부적 생성 오류:', error);
    res.status(500).json({ error: '부적 생성 중 오류가 발생했습니다.' });
  }
});

module.exports = router;