import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2026 TLJ Games Studio. 保留所有权利。</p>
        <div className="footer-links">
          <a href="#games">项目</a>
          <a href="#tech">技术</a>
          <a href="#about">关于</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
