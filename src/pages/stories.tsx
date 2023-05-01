import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from 'gatsby';
import { IGatsbyImageData } from "gatsby-plugin-image";


import AppPageLayout from "../components/layout/AppPageLayout";
import AppSeo from "../components/AppSeo";
import { AppCardWithPhoto, AppCardWithMain, AppCardWithPhotoAndText, AppCardWithIcon } from "../components/shared/cards";
import { IconTypes } from "../lib/iconLibrary";

type ImageSharpProp = {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
}

type P = {
  id: string
  frontmatter: {
    slug: string
    title: string
    description: string
    is_featured: boolean
    publishedDate: string
    status: string
    author: string
    desktop_image: ImageSharpProp
  }
}

type Props = {
  allMdx: {
    nodes: P[]
  }
}

const StoriesPage: React.FC<PageProps<Props>> = ({
  data
}) => {
  const nodes = data.allMdx.nodes;
  return (
    <AppPageLayout>
      <section className="grid md:grid-cols-2 lg:grid-cols-4">
        {
          nodes.map((node, index) => {
            if (node.frontmatter.is_featured) {
              return (
                <AppCardWithPhotoAndText
                  key={node.id}
                  storyTitle={node.frontmatter.title}
                  storyTagline="LAST MONTH’S FEATURED STORY"
                  storyAuthor={`by ${node.frontmatter.author}`}
                  storyDescription={node.frontmatter.description}
                  src={node.frontmatter.desktop_image}
                  publishedDate={node.frontmatter.publishedDate}
                  callToActionText="Read Story"
                  alt={node.frontmatter.title}
                  mode="hero"
                  className="md:col-span-2 lg:col-span-4"
                />
              )
            }
            return (
              <AppCardWithPhotoAndText
                key={node.id}
                storyTitle={node.frontmatter.title}
                storyAuthor={`by ${node.frontmatter.author}`}
                src={node.frontmatter.desktop_image}
                publishedDate={node.frontmatter.publishedDate}
                callToActionText="Read Story"
                alt={node.frontmatter.title}
                className="h-375px md:h-125"
              />
            )
          })
        }
      </section>
    </AppPageLayout>
  )
}


export const query = graphql`
  query MyQuery {
    allMdx(
      sort: {frontmatter: {is_featured: ASC}}
      filter: {parent: {}, frontmatter: {slug: {ne: "home_page"}}}
    ) {
      nodes {
        id
        frontmatter {
          slug
          title
          is_featured
          status
          publishedDate
          description
          author
          desktop_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

export default StoriesPage;

export const Head: HeadFC = () => <AppSeo title="Stories" />
