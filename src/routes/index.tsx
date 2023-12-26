import { RouteObject, useRoutes } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import { lazy, Suspense } from 'react';
import LoadingScreen from '../components/LoadingScreen';

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes<any>) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

const LoginPage = Loadable(lazy(() => import('pages/Login')));

const routes: RouteObject[] = [
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage />
  },
  {
    element: <MainLayout />,
    path: '/portal',
    children: [
      { path: '/', element: <LoginPage /> },
    ],
  },
];

const Router = () => {
  return useRoutes(routes);
};

export default Router;
