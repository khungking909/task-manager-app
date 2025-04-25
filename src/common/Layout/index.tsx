import { Notification } from '@components/Molecules/Notification';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Notification />;
      <Outlet />
    </>
  );
}
