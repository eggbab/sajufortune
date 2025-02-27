import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // 저장된 테마 가져오기
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <motion.button 
      className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="테마 변경"
    >
      <motion.div 
        className="toggle-thumb"
        animate={{ x: isDarkMode ? 22 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <i className={`fas ${isDarkMode ? 'fa-moon' : 'fa-sun'}`}></i>
      </motion.div>
      <span className="sr-only">
        {isDarkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
      </span>
    </motion.button>
  );
};

export default ThemeToggle; 