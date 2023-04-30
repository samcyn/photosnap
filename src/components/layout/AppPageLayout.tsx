import React, { PropsWithChildren } from 'react';

import AppNavigationBar from './AppNavigationBar';
import AppFooter from './AppFooter';

const AppPageLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="max-w-screen-3xl mx-auto">
      <AppNavigationBar />
      <main>
        {children}
      </main>
      <AppFooter />
    </div>
  )
}

export default AppPageLayout;