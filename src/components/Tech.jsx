import React from 'react';
import { motion } from 'framer-motion';
import './Tech.css';

const Tech = () => {
  return (
    <section id="tech" className="tech-section">
      <h2 className="section-title text-gradient">核心技术</h2>
      <p className="section-subtitle">双轮驱动的 AI Native 生产力</p>
      
      <div className="tech-grid">
        {/* 技术 1：AI 视频 */}
        <motion.div 
          className="tech-card glass"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="tech-number">01</div>
          <h3>AI 视频生成</h3>
          <div className="tech-divider"></div>
          <p>基于神经渲染与跨模态生成技术，开创超写实（Hyper-realism）的互动影像新纪元。我们解构了传统摄制的时空锁链，让每一个像素都承载无边界的想象力。</p>
        </motion.div>
        
        {/* 技术 2：AI 代码 */}
        <motion.div 
          className="tech-card glass"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="tech-number">02</div>
          <h3>AI 智能代码</h3>
          <div className="tech-divider"></div>
          <p>以智能算法重塑游戏底层逻辑，构建 AI Native 的敏捷架构。打破传统开发的物理周期，实现复杂交互系统的自适应构建，打造高度动态的自由交互体验。我们的代码不仅是指令，更是驱动游戏世界实时演进的智慧中枢。</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Tech;
