import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AnalysisForm.css';

const AnalysisForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    year: '',
    month: '',
    day: '',
    hour: '',
    minute: '',
    birthTimeKnown: 'yes'
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // 에러 상태 업데이트
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const handleBirthTimeKnown = (value) => {
    setFormData({
      ...formData,
      birthTimeKnown: value,
      hour: value === 'no' ? '' : formData.hour,
      minute: value === 'no' ? '' : formData.minute
    });
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.year) newErrors.year = '태어난 년도를 입력해주세요';
    if (!formData.month) newErrors.month = '태어난 월을 입력해주세요';
    if (!formData.day) newErrors.day = '태어난 일을 입력해주세요';
    
    if (formData.birthTimeKnown === 'yes') {
      if (!formData.hour) newErrors.hour = '태어난 시간을 입력해주세요';
    }
    
    if (!formData.gender) newErrors.gender = '성별을 선택해주세요';
    
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // 분석 결과 페이지로 이동 - 데이터 전달
    navigate('/result', { 
      state: { 
        userData: formData 
      } 
    });
  };
  
  return (
    <form className="analysis-form" onSubmit={handleSubmit}>
      {Object.keys(errors).length > 0 && (
        <div className="error-message">
          입력 정보를 확인해주세요.
        </div>
      )}
      
      <div className="form-group">
        <label htmlFor="name">이름 (선택사항)</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="이름을 입력하세요"
        />
      </div>
      
      <div className="form-group">
        <label>성별</label>
        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
            />
            남성
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
            />
            여성
          </label>
        </div>
        {errors.gender && <span className="error">{errors.gender}</span>}
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="year">년도</label>
          <input
            type="number"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            placeholder="YYYY"
            min="1900"
            max="2024"
          />
          {errors.year && <span className="error">{errors.year}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="month">월</label>
          <select
            id="month"
            name="month"
            value={formData.month}
            onChange={handleChange}
          >
            <option value="">선택</option>
            {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
              <option key={month} value={month}>{month}월</option>
            ))}
          </select>
          {errors.month && <span className="error">{errors.month}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="day">일</label>
          <select
            id="day"
            name="day"
            value={formData.day}
            onChange={handleChange}
          >
            <option value="">선택</option>
            {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
              <option key={day} value={day}>{day}일</option>
            ))}
          </select>
          {errors.day && <span className="error">{errors.day}</span>}
        </div>
      </div>
      
      <div className="form-group">
        <label>태어난 시간을 아시나요?</label>
        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              name="birthTimeKnown"
              checked={formData.birthTimeKnown === 'yes'}
              onChange={() => handleBirthTimeKnown('yes')}
            />
            예
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="birthTimeKnown"
              checked={formData.birthTimeKnown === 'no'}
              onChange={() => handleBirthTimeKnown('no')}
            />
            아니오
          </label>
        </div>
      </div>
      
      {formData.birthTimeKnown === 'yes' && (
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="hour">시</label>
            <select
              id="hour"
              name="hour"
              value={formData.hour}
              onChange={handleChange}
            >
              <option value="">선택</option>
              {Array.from({ length: 24 }, (_, i) => i).map(hour => (
                <option key={hour} value={hour}>{hour}시</option>
              ))}
            </select>
            {errors.hour && <span className="error">{errors.hour}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="minute">분</label>
            <select
              id="minute"
              name="minute"
              value={formData.minute}
              onChange={handleChange}
            >
              <option value="">선택</option>
              {Array.from({ length: 12 }, (_, i) => i * 5).map(minute => (
                <option key={minute} value={minute}>{minute}분</option>
              ))}
            </select>
          </div>
        </div>
      )}
      
      <button 
        type="submit" 
        className="btn-submit"
      >
        무료 사주 분석 받기
      </button>
    </form>
  );
};

export default AnalysisForm; 