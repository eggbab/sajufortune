import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const { 
    id, 
    title, 
    price, 
    originalPrice, 
    discount, 
    description, 
    features, 
    image,
    imageStyle, 
    rating, 
    reviews, 
    recommended 
  } = product;
  
  // 가격을 천 단위로 구분하여 형식화
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  
  // 별점 렌더링
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // 꽉 찬 별
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }
    
    // 반 별
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }
    
    // 빈 별
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }
    
    return stars;
  };
  
  return (
    <motion.div 
      className={`product-card ${recommended ? 'recommended' : ''}`}
      whileHover={{ 
        y: -10,
        boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)'
      }}
      transition={{ duration: 0.3 }}
    >
      {recommended && (
        <div className="recommended-badge">
          <i className="fas fa-crown"></i> 인기
        </div>
      )}
      
      {discount > 0 && (
        <div className="discount-badge">
          {discount}% 할인
        </div>
      )}
      
      <div className="product-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div 
            className="image-placeholder" 
            style={imageStyle || { backgroundColor: '#f0f0f0' }}
          >
            <span className="product-initial">{title.charAt(0)}</span>
          </div>
        )}
      </div>
      
      <div className="product-content">
        <h3 className="product-title">{title}</h3>
        
        <div className="product-rating">
          <div className="stars">
            {renderStars(rating)}
          </div>
          <span className="reviews-count">({reviews})</span>
        </div>
        
        <p className="product-description">{description}</p>
        
        <div className="product-features">
          <h4>주요 기능</h4>
          <ul>
            {features.slice(0, 4).map((feature, index) => (
              <li key={index}>
                <i className="fas fa-check"></i> {feature}
              </li>
            ))}
            {features.length > 4 && (
              <li className="more-features">
                + 추가 기능 {features.length - 4}개
              </li>
            )}
          </ul>
        </div>
        
        <div className="product-price">
          {discount > 0 && (
            <span className="original-price">₩{formatPrice(originalPrice)}</span>
          )}
          <span className="current-price">₩{formatPrice(price)}</span>
        </div>
        
        <div className="product-actions">
          <Link to={`/products/${id}`} className="btn-product-details">
            상세보기
          </Link>
          <Link to={`/checkout?product=${id}`} className="btn-product-buy">
            <i className="fas fa-shopping-cart"></i> 구매하기
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard; 