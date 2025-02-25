const { OpenAI } = require('openai');

// OpenAI 클라이언트 초기화
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // 환경 변수에서 API 키 가져오기
});

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
  const axios = require('axios');
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

module.exports = {
  analyzeSaju,
  generateTalisman
};