import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import AppPageLayout from "../components/AppPageLayout"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <AppPageLayout pageTitle="Not Found">
      <div>Not Found</div>
    </AppPageLayout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
