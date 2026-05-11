import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header glass">
      <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
        <span className="text-gradient">AI</span> Vision
      </Link>
      
      {/* 汉堡菜单图标 */}
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* 导航菜单 */}
      <nav className={`nav ${isMenuOpen ? 'nav-active' : ''}`}>
        <a href="/#games" onClick={() => setIsMenuOpen(false)}>造梦维度</a>
        <a href="/#tech" onClick={() => setIsMenuOpen(false)}>核心技术</a>
        <Link to="/about" onClick={() => setIsMenuOpen(false)}>关于我们</Link>
        
        {/* 移动端菜单内嵌的按钮 */}
        <div className="nav-cta" onClick={() => setIsMenuOpen(false)}>
          <button className="btn-primary">联系合作</button>
        </div>
      </nav>

      {/* 桌面端独立的按钮 */}
      <div className="cta">
        <button className="btn-primary">联系合作</button>
      </div>
    </header>
  );
};

export default Header;
