import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('profile');
  const [editMode, setEditMode] = useState(false);
  
  // 편집 가능한 사용자 정보
  const [editableUser, setEditableUser] = useState({
    name: '',
    email: '',
    birthYear: '',
    birthMonth: '',
    birthDay: '',
    birthTime: '',
    gender: '',
    phoneNumber: ''
  });
  
  useEffect(() => {
    // 실제 서비스에서는 API 호출로 사용자 정보를 가져옴
    // 여기서는 localStorage와 가상 데이터 사용
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    
    // 가상의 사용자 데이터
    const mockUser = {
      id: '1',
      name: '김운세',
      email: 'user@example.com',
      birthYear: '1990',
      birthMonth: '3',
      birthDay: '15',
      birthTime: '09:30',
      gender: '남성',
      phoneNumber: '010-1234-5678',
      membership: '일반',
      registeredAt: '2023-02-15',
      analysisHistory: [
        { id: '1', type: '기본 운세', date: '2023-03-20', title: '2023년 운세 분석' },
        { id: '2', type: '사업운', date: '2023-04-05', title: '사업 운세 분석' },
        { id: '3', type: '연애운', date: '2023-05-12', title: '연애 운세 분석' }
      ],
      purchaseHistory: [
        { id: '1', product: '프리미엄 운세 분석', price: '39,000원', date: '2023-04-01', status: '결제완료' },
        { id: '2', product: '2023년 종합 운세', price: '29,000원', date: '2023-01-05', status: '결제완료' }
      ]
    };
    
    setTimeout(() => {
      setUser(mockUser);
      setEditableUser({
        name: mockUser.name,
        email: mockUser.email,
        birthYear: mockUser.birthYear,
        birthMonth: mockUser.birthMonth,
        birthDay: mockUser.birthDay,
        birthTime: mockUser.birthTime,
        gender: mockUser.gender,
        phoneNumber: mockUser.phoneNumber
      });
      setLoading(false);
    }, 1000);
  }, [navigate]);
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  const handleEditToggle = () => {
    if (editMode) {
      // 실제로는 여기서 API 호출로 사용자 정보 업데이트
      setUser({
        ...user,
        ...editableUser
      });
    }
    setEditMode(!editMode);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableUser({
      ...editableUser,
      [name]: value
    });
  };
  
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };
  
  if (loading) {
    return (
      <div className="profile-page">
        <Header />
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>로딩 중...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="profile-page">
      <Header />
      
      <main>
        <section className="profile-header">
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              마이페이지
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {user.name}님의 개인정보와 이용 내역을 확인하세요
            </motion.p>
          </div>
        </section>
        
        <section className="profile-content">
          <div className="container">
            <div className="profile-tabs">
              <button 
                className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => handleTabChange('profile')}
              >
                기본 정보
              </button>
              <button 
                className={`tab-btn ${activeTab === 'analysis' ? 'active' : ''}`}
                onClick={() => handleTabChange('analysis')}
              >
                분석 내역
              </button>
              <button 
                className={`tab-btn ${activeTab === 'purchases' ? 'active' : ''}`}
                onClick={() => handleTabChange('purchases')}
              >
                구매 내역
              </button>
            </div>
            
            <div className="profile-tab-content">
              {activeTab === 'profile' && (
                <motion.div 
                  className="profile-info"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="card-header">
                    <h2>내 정보</h2>
                    <button className="edit-toggle" onClick={handleEditToggle}>
                      {editMode ? '저장' : '수정'}
                    </button>
                  </div>
                  
                  <div className="info-grid">
                    <div className="info-group">
                      <label>이름</label>
                      {editMode ? (
                        <input 
                          type="text"
                          name="name"
                          value={editableUser.name}
                          onChange={handleInputChange}
                        />
                      ) : (
                        <p>{user.name}</p>
                      )}
                    </div>
                    
                    <div className="info-group">
                      <label>이메일</label>
                      <p>{user.email}</p>
                    </div>
                    
                    <div className="info-group">
                      <label>생년월일</label>
                      {editMode ? (
                        <div className="date-inputs">
                          <input 
                            type="text"
                            name="birthYear"
                            value={editableUser.birthYear}
                            onChange={handleInputChange}
                            placeholder="년"
                          />
                          <input 
                            type="text"
                            name="birthMonth"
                            value={editableUser.birthMonth}
                            onChange={handleInputChange}
                            placeholder="월"
                          />
                          <input 
                            type="text"
                            name="birthDay"
                            value={editableUser.birthDay}
                            onChange={handleInputChange}
                            placeholder="일"
                          />
                        </div>
                      ) : (
                        <p>{user.birthYear}년 {user.birthMonth}월 {user.birthDay}일</p>
                      )}
                    </div>
                    
                    <div className="info-group">
                      <label>태어난 시간</label>
                      {editMode ? (
                        <input 
                          type="time"
                          name="birthTime"
                          value={editableUser.birthTime}
                          onChange={handleInputChange}
                        />
                      ) : (
                        <p>{user.birthTime || '미입력'}</p>
                      )}
                    </div>
                    
                    <div className="info-group">
                      <label>성별</label>
                      {editMode ? (
                        <select 
                          name="gender"
                          value={editableUser.gender}
                          onChange={handleInputChange}
                        >
                          <option value="남성">남성</option>
                          <option value="여성">여성</option>
                        </select>
                      ) : (
                        <p>{user.gender}</p>
                      )}
                    </div>
                    
                    <div className="info-group">
                      <label>휴대폰 번호</label>
                      {editMode ? (
                        <input 
                          type="text"
                          name="phoneNumber"
                          value={editableUser.phoneNumber}
                          onChange={handleInputChange}
                          placeholder="010-0000-0000"
                        />
                      ) : (
                        <p>{user.phoneNumber || '미입력'}</p>
                      )}
                    </div>
                    
                    <div className="info-group">
                      <label>멤버십</label>
                      <p>{user.membership}</p>
                    </div>
                    
                    <div className="info-group">
                      <label>가입일</label>
                      <p>{user.registeredAt}</p>
                    </div>
                  </div>
                  
                  <div className="account-actions">
                    <button className="btn-change-password">비밀번호 변경</button>
                    <button className="btn-logout" onClick={handleLogout}>로그아웃</button>
                  </div>
                </motion.div>
              )}
              
              {activeTab === 'analysis' && (
                <motion.div 
                  className="profile-analysis"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="card-header">
                    <h2>분석 내역</h2>
                  </div>
                  
                  {user.analysisHistory.length > 0 ? (
                    <div className="analysis-list">
                      {user.analysisHistory.map(item => (
                        <div key={item.id} className="analysis-item">
                          <div className="analysis-details">
                            <h3>{item.title}</h3>
                            <p className="analysis-meta">
                              <span className="analysis-type">{item.type}</span>
                              <span className="analysis-date">{item.date}</span>
                            </p>
                          </div>
                          <button className="btn-view">결과 보기</button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="empty-state">
                      <p>분석 내역이 없습니다.</p>
                      <button className="btn-primary">운세 분석하러 가기</button>
                    </div>
                  )}
                </motion.div>
              )}
              
              {activeTab === 'purchases' && (
                <motion.div 
                  className="profile-purchases"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="card-header">
                    <h2>구매 내역</h2>
                  </div>
                  
                  {user.purchaseHistory.length > 0 ? (
                    <div className="purchase-list">
                      {user.purchaseHistory.map(item => (
                        <div key={item.id} className="purchase-item">
                          <div className="purchase-details">
                            <h3>{item.product}</h3>
                            <p className="purchase-meta">
                              <span className="purchase-price">{item.price}</span>
                              <span className="purchase-date">{item.date}</span>
                            </p>
                          </div>
                          <div className="purchase-status">{item.status}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="empty-state">
                      <p>구매 내역이 없습니다.</p>
                      <button className="btn-primary">상품 보러가기</button>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <style jsx>{`
        .profile-page {
          min-height: 100vh;
          background-color: var(--bg-color);
          color: var(--text-color);
        }
        
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 50vh;
          gap: 20px;
        }
        
        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 5px solid var(--bg-hover);
          border-top: 5px solid var(--primary-color);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .profile-header {
          background-color: var(--primary-color);
          color: white;
          padding: 60px 0;
          text-align: center;
        }
        
        .profile-header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 10px;
        }
        
        .profile-content {
          padding: 50px 0;
        }
        
        .profile-tabs {
          display: flex;
          background-color: var(--card-bg);
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 30px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        .tab-btn {
          flex: 1;
          padding: 15px;
          background: none;
          border: none;
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .tab-btn.active {
          background-color: var(--primary-color);
          color: white;
        }
        
        .profile-tab-content {
          background-color: var(--card-bg);
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }
        
        .card-header h2 {
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--text-color);
        }
        
        .edit-toggle {
          background-color: var(--primary-color);
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .edit-toggle:hover {
          background-color: #7d3c98;
        }
        
        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 25px;
        }
        
        .info-group {
          margin-bottom: 20px;
        }
        
        .info-group label {
          display: block;
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 5px;
        }
        
        .info-group p {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--text-color);
        }
        
        .info-group input,
        .info-group select {
          width: 100%;
          padding: 10px 15px;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          background-color: var(--input-bg);
          color: var(--text-color);
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .info-group input:focus,
        .info-group select:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 2px var(--primary-light);
        }
        
        .date-inputs {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 10px;
        }
        
        .account-actions {
          display: flex;
          gap: 15px;
          margin-top: 40px;
          justify-content: flex-end;
        }
        
        .btn-change-password,
        .btn-logout {
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .btn-change-password {
          background-color: var(--bg-hover);
          color: var(--text-color);
          border: 1px solid var(--border-color);
        }
        
        .btn-logout {
          background-color: transparent;
          color: #e74c3c;
          border: 1px solid #e74c3c;
        }
        
        .btn-change-password:hover {
          background-color: var(--border-color);
        }
        
        .btn-logout:hover {
          background-color: rgba(231, 76, 60, 0.1);
        }
        
        .analysis-list,
        .purchase-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .analysis-item,
        .purchase-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background-color: var(--bg-hover);
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        
        .analysis-item:hover,
        .purchase-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        .analysis-details h3,
        .purchase-details h3 {
          font-size: 1.1rem;
          margin-bottom: 5px;
          color: var(--text-color);
        }
        
        .analysis-meta,
        .purchase-meta {
          display: flex;
          gap: 15px;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        
        .btn-view {
          background-color: var(--primary-color);
          color: white;
          padding: 8px 16px;
          border: none;
          border-radius: 6px;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .btn-view:hover {
          background-color: #7d3c98;
        }
        
        .purchase-status {
          font-size: 0.9rem;
          color: #27ae60;
          font-weight: 500;
        }
        
        .empty-state {
          text-align: center;
          padding: 40px 0;
        }
        
        .empty-state p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }
        
        .btn-primary {
          background-color: var(--primary-color);
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
          background-color: #7d3c98;
        }
        
        @media (max-width: 768px) {
          .profile-header {
            padding: 40px 0;
          }
          
          .profile-tabs {
            flex-direction: column;
          }
          
          .profile-tab-content {
            padding: 20px;
          }
          
          .info-grid {
            grid-template-columns: 1fr;
          }
          
          .account-actions {
            flex-direction: column;
          }
          
          .btn-change-password,
          .btn-logout {
            width: 100%;
            text-align: center;
          }
          
          .analysis-item,
          .purchase-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }
          
          .btn-view {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ProfilePage; 