import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 这个组件用于在路由切换时处理滚动
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 如果没有 hash（说明不是锚点跳转），则直接回到顶部
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // 如果有 hash，延迟一小会儿等待页面渲染完毕，然后平滑滚动到对应锚点
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
