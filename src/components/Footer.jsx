import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2026 TLJ Games Studio. {t('footer.rights')}</p>
        <div className="footer-links">
          <a href="#games">{t('footer.games')}</a>
          <a href="#tech">{t('footer.tech')}</a>
          <a href="#about">{t('footer.about')}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
