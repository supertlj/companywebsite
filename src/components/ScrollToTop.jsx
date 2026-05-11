import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 这个组件用于在路由切换时，自动将滚动条拉回顶部
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
