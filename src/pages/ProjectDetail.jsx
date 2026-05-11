import React from 'react';
import { useTranslation } from 'react-i18next';
import './ProjectDetail.css';
import heroBg from '../assets/hero-bg.png'; // 复用之前的图片作为详情页大图

const ProjectDetail = () => {
  const { t } = useTranslation();

  return (
    <div className="project-detail-page">
      <div className="back-nav">
        <a href="/">{t('detail.back')}</a>
      </div>
      
      <section className="detail-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title text-gradient">{t('detail.title')}</h1>
          <p className="hero-subtitle">{t('detail.subtitle')}</p>
        </div>
      </section>

      <section className="detail-content glass">
        <div className="content-section">
          <h2>{t('detail.intro_title')}</h2>
          <p>{t('detail.intro_desc')}</p>
        </div>
        
        <div className="content-section">
          <h2>{t('detail.char_title')}</h2>
          <div className="characters-grid">
            <div className="char-card">
              <h3>{t('detail.char_butterfly')}</h3>
              <p>{t('detail.char_butterfly_desc')}</p>
            </div>
            <div className="char-card">
              <h3>{t('detail.char_zero')}</h3>
              <p>{t('detail.char_zero_desc')}</p>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>{t('detail.tech_title')}</h2>
          <p>{t('detail.tech_desc')}</p>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
