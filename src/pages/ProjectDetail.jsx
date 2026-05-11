import React from 'react';
import './ProjectDetail.css';
import heroBg from '../assets/hero-bg.png'; // 复用之前的图片作为详情页大图

const ProjectDetail = () => {
  return (
    <div className="project-detail-page">
      <div className="back-nav">
        <a href="/">← 返回首页</a>
      </div>
      
      <section className="detail-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title text-gradient">代号：蝶影</h1>
          <p className="hero-subtitle">一段跨越时空的悬疑交互影像</p>
        </div>
      </section>

      <section className="detail-content glass">
        <div className="content-section">
          <h2>作品简介</h2>
          <p>在不远的未来，人类记忆可以被数字化存储与修改。一名代号为“蝶”的特工，在执行一次记忆提取任务时，意外发现了自己被抹去的真实身份... 玩家将通过每一次选择，决定“蝶”的命运，并揭开隐藏在霓虹都市背后的惊天阴谋。</p>
        </div>
        
        <div className="content-section">
          <h2>角色设定</h2>
          <div className="characters-grid">
            <div className="char-card">
              <h3>蝶</h3>
              <p>主角。冷静、果断，拥有极高的格斗与黑客技巧。在寻找真实记忆的过程中，她必须学会重新信任与怀疑。</p>
            </div>
            <div className="char-card">
              <h3>林零</h3>
              <p>神秘的线人。似乎掌握着“蝶”过去的线索，游走在都市的暗面，立场难测。</p>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>技术呈现</h2>
          <p>本作完全基于我们自研的神经渲染技术，所有场景与角色面部细节均由 AI 驱动生成，为您提供极致的沉浸式视觉体验与千人千面的交互剧情。</p>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
