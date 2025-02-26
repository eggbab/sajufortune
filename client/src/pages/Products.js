import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "기본 사주 분석",
      price: "무료",
      description: "성격 특성, 기본 운세, 오행 분석이 포함된 기본 사주 풀이",
      features: ["성격 특성 분석", "기본 운세 해석", "오행 기본 분석"],
      cta: "지금 분석하기",
      link: "/"
    },
    {
      id: 2,
      name: "프리미엄 사주 분석",
      price: "₩15,000",
      description: "전문가가 검토한 심층 분석과 상세한 운세 해석",
      features: ["상세 사주 분석", "연간 운세 예측", "인간관계 분석", "직업 적성 분석"],
      cta: "구매하기",
      link: "/premium",
      featured: true
    },
    {
      id: 3,
      name: "커플 궁합 분석",
      price: "₩20,000",
      description: "두 사람의 사주를 기반으로 궁합과 관계 발전 방향 분석",
      features: ["상성 분석", "관계 발전 방향", "갈등 요소 파악", "최적의 결혼 시기"],
      cta: "궁합 보기",
      link: "/premium"
    },
    {
      id: 4,
      name: "1:1 전문가 상담",
      price: "₩50,000",
      description: "개인 맞춤형 상담을 통한 심층 분석과 질문 응답",
      features: ["1시간 화상 상담", "맞춤형 운세 분석", "질문 무제한", "녹화본 제공"],
      cta: "상담 예약",
      link: "/premium"
    }
  ];

  return (
    <div className="products-page">
      <Header />
      
      <div className="products-hero">
        <div className="container">
          <h1>사주포춘 서비스</h1>
          <p>당신의 운명을 더 깊이 이해하기 위한 다양한 서비스를 제공합니다</p>
        </div>
      </div>
      
      <div className="products-container container">
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className={`product-card ${product.featured ? 'featured' : ''}`}>
              {product.featured && <div className="featured-badge">인기</div>}
              <h2 className="product-name">{product.name}</h2>
              <div className="product-price">{product.price}</div>
              <p className="product-desc">{product.description}</p>
              
              <ul className="product-features">
                {product.features.map((feature, index) => (
                  <li key={index}><i className="fas fa-check"></i> {feature}</li>
                ))}
              </ul>
              
              <Link to={product.link} className="product-cta">
                {product.cta}
              </Link>
            </div>
          ))}
        </div>
        
        <div className="products-info">
          <div className="info-block">
            <h2>왜 사주포춘인가요?</h2>
            <p>20년 경력의 전문가들과 최신 AI 기술의 결합으로 정확하고 신뢰할 수 있는 분석을 제공합니다.</p>
          </div>
          
          <div className="info-block">
            <h2>분석 방법</h2>
            <p>고전 사주학과 현대 심리학을 결합한 독자적인 분석 시스템으로 보다 정확하고 실용적인 결과를 제공합니다.</p>
          </div>
          
          <div className="info-block">
            <h2>만족도 보장</h2>
            <p>모든 유료 서비스는 7일 이내 100% 환불 가능합니다. 자세한 내용은 환불 정책을 확인해주세요.</p>
            <Link to="/refund" className="info-link">환불 정책 보기</Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Products; 