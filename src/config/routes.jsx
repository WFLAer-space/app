import { lazy } from 'react';
import { 
  HomeIcon,
  ChartBarIcon,
  InformationCircleIcon,
  LinkIcon
} from '@heroicons/react/24/outline';

// 懒加载页面组件
const HomePage = lazy(() => import('../pages/HomePage'));
const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const LinksCollectionPage = lazy(() => import('../pages/LinksCollectionPage'));

// 路由配置
export const routes = [
  {
    path: '/',
    name: 'Home',
    icon: HomeIcon,
    component: HomePage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: ChartBarIcon,
    component: DashboardPage
  },
  {
    path: '/about',
    name: 'About',
    icon: InformationCircleIcon,
    component: AboutPage
  },
  {
    path: '/links',
    name: 'Links',
    icon: LinkIcon,
    component: LinksCollectionPage
  }
]; 