import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Hero.css';
import heroBg from '../assets/fmv_hero_bg.png'; // 使用全新的电影感大图

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="hero">
      {/* 独立的背景层，用于应用缩放动效 */}
      <div className="hero-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <motion.h1 
          className="hero-title text-gradient"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {t('hero.title')}
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {t('hero.subtitle')}
        </motion.p>
        
        <motion.div 
          className="hero-btns"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <button className="btn-primary">{t('hero.btn_reserve')}</button>
          <button className="btn-secondary">{t('hero.btn_trailer')}</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
