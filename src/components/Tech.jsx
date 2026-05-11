import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Tech.css';

const Tech = () => {
  const { t } = useTranslation();

  return (
    <section id="tech" className="tech-section">
      <h2 className="section-title text-gradient">{t('tech.title')}</h2>
      <p className="section-subtitle">{t('tech.subtitle')}</p>
      
      <div className="tech-grid">
        {/* 技术 1：AI 视频 */}
        <motion.div 
          className="tech-card glass"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ y: -5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="tech-number">01</div>
          <h3>{t('tech.vigen.title')}</h3>
          <div className="tech-divider"></div>
          <p>{t('tech.vigen.desc')}</p>
        </motion.div>
        
        {/* 技术 2：AI 代码 */}
        <motion.div 
          className="tech-card glass"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ y: -5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="tech-number">02</div>
          <h3>{t('tech.codegen.title')}</h3>
          <div className="tech-divider"></div>
          <p>{t('tech.codegen.desc')}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Tech;
