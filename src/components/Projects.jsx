import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Projects.css';
import project1 from '../assets/hero-bg.png'; // 复用 Hero 背景图作为第一个项目的封面

const Projects = () => {
  return (
    <section id="games" className="projects-section">
      <h2 className="section-title text-gradient">造梦维度</h2>
      <p className="section-subtitle">AI 驱动的互动影像宇宙</p>
      
      <div className="projects-grid">
        {/* 第一个项目：代号蝶影 */}
        <motion.div 
          className="project-card glass"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/project/die-ying" style={{ display: 'flex', flexDirection: 'column', height: '100%', textDecoration: 'none' }}>
            <div className="project-image" style={{ backgroundImage: `url(${project1})` }}></div>
            <div className="project-info">
              <h3>代号：蝶影</h3>
              <p>真人互动影像 / 悬疑 / 科幻</p>
              <span className="status status-live">预约中</span>
            </div>
          </Link>
        </motion.div>
        
        {/* 占位项目 1 */}
        <motion.div 
          className="project-card glass placeholder"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="project-image placeholder-bg">
            <span>Project Alpha</span>
          </div>
          <div className="project-info">
            <h3>Project Alpha</h3>
            <p>题材待定 / AI 深度参与</p>
            <span className="status status-soon">Coming Soon</span>
          </div>
        </motion.div>

        {/* 占位项目 2 */}
        <motion.div 
          className="project-card glass placeholder"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="project-image placeholder-bg">
            <span>Project Beta</span>
          </div>
          <div className="project-info">
            <h3>Project Beta</h3>
            <p>题材待定 / 快速迭代</p>
            <span className="status status-soon">Coming Soon</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
