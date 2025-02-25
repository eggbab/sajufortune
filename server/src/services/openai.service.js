const { Configuration, OpenAIApi } = require('openai');
const config = require('../config/config');

const configuration = new Configuration({
  apiKey: config.openaiApiKey,
});

const openai = new OpenAIApi(configuration);

async function generateSajuReading(userInfo) {
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "당신은 전문적인 사주 해석가입니다."
        },
        {
          role: "user",
          content: `사용자 정보: 
            이름: ${userInfo.name}
            생년월일: ${userInfo.birthDate}
            태어난 시간: ${userInfo.birthTime}
            성별: ${userInfo.gender}
            고민사항: ${userInfo.concern}`
        }
      ]
    });

    return completion.data.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API 오류:', error);
    throw error;
  }
}

module.exports = {
  generateSajuReading
}; 