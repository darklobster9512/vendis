import { Outlet } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';
import Seo from '@/components/site/Seo';

const SiteLayout = () => (
  <div className="min-h-screen bg-background">
    <Seo />
    <Navbar />
    <Outlet />
  </div>
);

export default SiteLayout;
