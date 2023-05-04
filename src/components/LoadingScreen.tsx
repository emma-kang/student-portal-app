import { useLocation } from 'react-router';

const LoadingScreen = () => {
  const { pathname } = useLocation();
  const isDashboard: boolean = pathname.includes('/dashboard');

  return <>{isDashboard && <svg tw="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24" />}</>;
};

export default LoadingScreen;
