import { Notification } from '@components/Atom/Notification';
import { Header } from '@components/Molecules/Header';
import { Footer } from '@components/Organism/Footer';
import React from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from 'src/common/layouts/Layout/ScrollToTop';

export default function Layout() {
  return (
    <React.Fragment>
      <Notification />
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}
