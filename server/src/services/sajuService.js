const { OpenAI } = require('openai');
const axios = require('axios');
require('dotenv').config();

// OpenAI 클라이언트 초기화
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // 환경 변수에서 API 키 가져오기
});

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// 부적 생성 함수
const generateTalisman = async (userData, sajuResult) => {
  try {
    const element = sajuResult.dominantElement;
    const concern = userData.concern;
    
    // 오행에 따른 부적 스타일 결정
    const elementStyles = {
      '목': '초록색과 파란색 계열의 나무와 식물 문양이 있는',
      '화': '붉은색과 주황색 계열의 불꽃과 태양 문양이 있는',
      '토': '황토색과 갈색 계열의 산과 대지 문양이 있는',
      '금': '흰색과 금색 계열의 금속과 보석 문양이 있는',
      '수': '검은색과 파란색 계열의 물결과 파도 문양이 있는'
    };
    
    // 관심사에 따른 부적 목적 결정
    const concernPurposes = {
      '건강': '건강 증진과 질병 예방을 위한',
      '재물': '재물 복과 경제적 성공을 위한',
      '사랑': '연애 운과 인연 찾기를 위한',
      '직장': '직장 운과 승진을 위한',
      '학업': '학업 성취와 시험 합격을 위한',
      '인간관계': '대인관계 개선과 인맥 확장을 위한'
    };
    
    const elementStyle = elementStyles[element] || '다양한 색상의';
    const concernPurpose = concernPurposes[concern] || '행운을 가져다주는';
    
    // DALL-E 프롬프트 생성
    const prompt = `한국 전통 부적 디자인. ${elementStyle} 한국 전통 부적. ${concernPurpose} 부적. 
    동양적인 문양과 한자가 포함된 신비로운 디자인. 배경은 어둡고 부적은 빛나는 느낌. 
    고해상도, 상세한 디테일, 신비로운 분위기.`;
    
    // DALL-E API 호출
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
      response_format: "url"
    });
    
    // 이미지 URL 반환
    const imageUrl = response.data[0].url;
    
    // 이미지 저장 로직 (실제 구현 필요)
    // 여기서는 URL만 반환하지만, 실제로는 이미지를 다운로드하여 서버에 저장하고
    // 해당 경로를 반환하는 로직이 필요합니다.
    const savedImagePath = `/images/talismans/${element}_${concern}_${Date.now()}.png`;
    
    // 이미지 다운로드 및 저장 로직 구현 필요
    await downloadAndSaveImage(imageUrl, savedImagePath);
    
    return {
      previewUrl: imageUrl,
      fullImagePath: savedImagePath
    };
  } catch (error) {
    console.error('부적 생성 중 오류 발생:', error);
    throw new Error('부적 생성에 실패했습니다.');
  }
};

// 이미지 다운로드 및 저장 함수
const downloadAndSaveImage = async (url, path) => {
  // 이 부분은 실제 구현이 필요합니다
  // axios나 fetch를 사용하여 이미지를 다운로드하고
  // fs 모듈을 사용하여 서버에 저장하는 로직
  
  // 예시 코드:
  const fs = require('fs');
  const { promisify } = require('util');
  const writeFileAsync = promisify(fs.writeFile);
  const mkdirAsync = promisify(fs.mkdir);
  const path = require('path');
  
  try {
    // 디렉토리 생성 (없는 경우)
    const dir = path.dirname(`./public${path}`);
    await mkdirAsync(dir, { recursive: true });
    
    // 이미지 다운로드
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'arraybuffer'
    });
    
    // 이미지 저장
    await writeFileAsync(`./public${path}`, response.data);
    
    return true;
  } catch (error) {
    console.error('이미지 다운로드 중 오류:', error);
    throw error;
  }
};

async function analyzeSaju(userData) {
  try {
    const { name, birthDate, birthTime, gender, concern } = userData;
    
    // OpenAI API 요청 데이터
    const prompt = `
      사용자 정보:
      - 이름: ${name}
      - 생년월일: ${birthDate}
      - 태어난 시간: ${birthTime || '모름'}
      - 성별: ${gender}
      - 관심사: ${concern}
      
      위 정보를 바탕으로 사주팔자를 분석하고, 다음 형식으로 결과를 JSON 형태로 제공해주세요:
      {
        "dominantElement": "오행 중 가장 강한 기운 (목/화/토/금/수)",
        "personality": "성격 특성에 대한 상세 설명",
        "career": "직업 및 진로에 대한 조언",
        "relationship": "대인관계 및 연애/결혼 운에 대한 분석",
        "wealth": "재물운에 대한 분석",
        "health": "건강 관련 조언",
        "yearPillar": "년주 (갑자, 을축 등)",
        "monthPillar": "월주",
        "dayPillar": "일주",
        "hourPillar": "시주 (시간을 알 경우)",
        "advice": "종합적인 조언"
      }
    `;
    
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: '당신은 사주와 운세에 정통한 전문가입니다. 사용자의 생년월일과 시간을 바탕으로 사주팔자를 분석하고 상세한 운세 정보를 제공합니다.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    
    // API 응답에서 JSON 추출
    const content = response.data.choices[0].message.content;
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    } else {
      throw new Error('API 응답에서 JSON을 추출할 수 없습니다.');
    }
    
  } catch (error) {
    console.error('사주 분석 오류:', error);
    throw error;
  }
}

module.exports = {
  analyzeSaju,
  generateTalisman
};