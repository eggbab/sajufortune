const { OpenAI } = require('openai');
const { calculateSaju } = require('../utils/sajuCalculator');
const config = require('../config/config');

const openai = new OpenAI({
  apiKey: config.openaiApiKey,
});

exports.generateSajuReading = async (userData) => {
  const { name, birthDate, birthTime, gender, concern } = userData;
  
  const sajuData = calculateSaju(birthDate, birthTime);
  
  const prompt = `
    당신은 전문 사주 해석가입니다. 다음 정보를 바탕으로 한국식 사주팔자(사주) 해석을 생성해주세요.
    
    이름: ${name}
    생년월일: ${birthDate}
    태어난 시간: ${birthTime || '알 수 없음'}
    성별: ${gender}
    관심사: ${concern}
    
    사주 데이터:
    천간: ${sajuData.heavenlyStem}
    지지: ${sajuData.earthlyBranch}
    오행 분석: ${JSON.stringify(sajuData.elements)}
    주요 오행: ${sajuData.dominantElement}
    
    다음 형식으로 사주 해석을 제공해주세요:
    1. 기본 사주 소개 (1-2 문단)
    2. 2025년 운세 분석 (1-2 문단)
    3. ${concern}에 관한 구체적인 조언 (1 문단)
    4. 오늘의 조언 (1-2 문장)
    
    반드시 한국어로, 친근하고 긍정적인 톤으로 작성해주세요. 운명론적이거나 지나치게 부정적인 표현은 피해주세요.
    JSON 형식으로 반환해주세요.
  `;
  
  const aiResponse = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "당신은 전문 사주 해석가입니다." },
      { role: "user", content: prompt }
    ],
    temperature: 0.7,
  });
  
  const sajuReading = JSON.parse(aiResponse.choices[0].message.content);
  
  return {
    ...sajuReading,
    elements: sajuData.elements,
    dominantElement: sajuData.dominantElement,
    createdAt: new Date().toISOString()
  };
};

// 부적 생성 함수
const generateTalisman = async (userData, sajuResult, talismanType) => {
  // 실제 구현에서는 이미지 생성 또는 템플릿 선택 로직 구현
  // 여기서는 간단한 예시만 제공
  return `/talismans/${talismanType}_${userData.concern}_${Date.now()}.png`;
};

exports.processPayment = async (paymentData) => {
  // 결제 처리 로직...
  const { userData, sajuResult, talismanType } = paymentData;
  
  // 실제 결제 처리 구현 필요
  const talismanUrl = await generateTalisman(userData, sajuResult, talismanType);
  
  return {
    success: true,
    message: '결제가 성공적으로 처리되었습니다.',
    downloadUrl: talismanUrl,
    orderId: `ORDER-${Date.now()}`
  };
};