import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="back-nav">
        <a href="/">← 返回首页</a>
      </div>
      
      <section className="about-hero">
        <h1 className="hero-title text-gradient">关于我们</h1>
        <p className="hero-subtitle">重塑游戏与影像的边界</p>
      </section>

      <section className="about-content glass">
        <div className="about-section">
          <h2>我们是谁</h2>
          <p>我们是一家诞生于 AI 浪潮之巅的 <strong>AI Native</strong> 游戏工作室。在传统的游戏开发与影视制作中，边际成本和物理时间往往是创意最大的敌人。而我们，致力于通过最前沿的生成式 AI 技术，彻底打破这些限制。</p>
        </div>

        <div className="about-section">
          <h2>我们的愿景</h2>
          <p>我们相信，未来的互动影像将不再是机械的脚本分支，而是能够与玩家灵魂共鸣的、实时演进的智慧世界。我们的目标是打造超写实（Hyper-realism）的电影级真人互动体验，让每一次交互都成为独一无二的艺术品。</p>
        </div>

        <div className="about-section">
          <h2>AI 共创范式</h2>
          <p>在我们的工作室，AI 不仅仅是辅助工具，更是核心的共创者。从底层的智能自适应代码，到顶层的神经渲染视觉生成，人类的极致创意与 AI 的无限算力在这里深度交融，开启叙事艺术的新篇章。</p>
        </div>
      </section>
    </div>
  );
};

export default About;
