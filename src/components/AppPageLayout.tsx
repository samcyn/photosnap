import React, {PropsWithChildren} from 'react'
import { Link } from 'gatsby'

const AppPageLayout = ({ pageTitle, children }: PropsWithChildren<{
  pageTitle: string
}>) => {
  return (
    <>
      <header>header</header>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <footer>footer</footer>
    </>
  )
}

export default AppPageLayout;