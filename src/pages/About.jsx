import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <div className="back-nav">
        <a href="/">{t('detail.back')}</a>
      </div>
      
      <section className="about-hero">
        <h1 className="hero-title text-gradient">{t('about.title')}</h1>
        <p className="hero-subtitle">{t('about.subtitle')}</p>
      </section>

      <section className="about-content glass">
        <div className="about-section">
          <p>{t('about.p1')}</p>
          <br />
          <p>{t('about.p2')}</p>
          <br />
          <p>{t('about.p3')}</p>
        </div>
      </section>
    </div>
  );
};

export default About;
