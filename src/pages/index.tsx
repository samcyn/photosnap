import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import AppPageLayout from "../components/layout/AppPageLayout";
import AppSeo from "../components/AppSeo";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <AppPageLayout>
      <section></section>
    </AppPageLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <AppSeo title="Home Page" />