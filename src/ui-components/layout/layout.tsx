import { PropsWithChildren, ReactElement } from 'react';

import MainHeader from './main-header';
import { Outlet } from 'react-router-dom';

const Layout: React.FunctionComponent<PropsWithChildren> = (): ReactElement => {
  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
