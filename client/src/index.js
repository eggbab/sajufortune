import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>사주포춘</h1>
      <p>AI 기반 사주 분석 서비스</p>
      <div style={{ marginTop: '30px' }}>
        <form style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'left' }}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>이름</label>
            <input type="text" placeholder="이름을 입력하세요" style={{ width: '100%', padding: '10px' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>생년월일</label>
            <input type="date" style={{ width: '100%', padding: '10px' }} />
          </div>
          <button style={{ 
            width: '100%', 
            padding: '15px', 
            backgroundColor: '#6c5ce7', 
            color: 'white', 
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}>
            사주 분석하기
          </button>
        </form>
      </div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);