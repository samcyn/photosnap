import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import AppPageLayout from "../components/AppPageLayout";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <AppPageLayout pageTitle="Index Page">
      <div>Index page</div>
    </AppPageLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
