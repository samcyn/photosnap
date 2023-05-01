import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from 'gatsby';
import { IGatsbyImageData } from "gatsby-plugin-image";


import AppPageLayout from "../components/layout/AppPageLayout";
import AppSeo from "../components/AppSeo";
import { AppCardWithPhoto, AppCardWithMain, AppCardWithIcon } from "../components/shared/cards";
import { IconTypes } from "../lib/iconLibrary";

type ImageSharpProp = {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
}

type P = {
  title: string
  description: string
  slug: string
  mobile_image: ImageSharpProp
  tablet_image: ImageSharpProp
  desktop_image: ImageSharpProp
}

interface Story extends P {
  published: string
  author: string
  publishedDate: string
}

type Props = {
  mdx: {
    frontmatter: {
      slug: string
      title: string
      beautiful_stories: P
      designed_for_everyone: P
      create_and_share: P
      stories: Story[]
      features: {
        slug: string
        title: string
        description: string
        icon: {
          icon: IconTypes
          width: string
          height: string
        }
      }[]
    }
  }
}

const IndexPage: React.FC<PageProps<Props>> = ({
  data
}) => {
  const {
    create_and_share,
    features
  } = data.mdx.frontmatter;
  // 64.45
  return (
    <AppPageLayout>
      <section className="flex flex-wrap flex-col md:flex-row">
        <AppCardWithPhoto
          src={create_and_share.desktop_image}
          alt={create_and_share.title}
          className="w-full md:w-1/3 md:basis-1/3 xl:w-7/12 xl:basis-7/12 h-294px md:h-auto md:order-2"
        />

        <AppCardWithMain
          title='Create and share your photo stories.'
          description='Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.'
          showIndicator
          className="w-full md:w-2/3 md:basis-2/3 xl:w-5/12 xl:basis-5/12 justify-center items-center bg-black text-white py-0 md:py-43 xl:py-43 md:order-1"
        />
      </section>
      <section className="px-4 py-20 md:px-35 md:py-30 lg:px-0">
        <div className="flex flex-col gap-14 md:gap-20 lg:flex-row lg:gap-30px container">
          {
            features.map(feature => (
              <AppCardWithIcon
                key={feature.slug}
                title={feature.title}
                description={feature.description}
                iconProps={feature.icon}
              />
            ))
          }
        </div>
      </section>
    </AppPageLayout>
  )
}


export const query = graphql`
  query MyQuery {
    mdx(frontmatter: {slug: {eq: "features_page"}}) {
      frontmatter {
        slug
        title
        create_and_share {
          description
          slug
          title
          mobile_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          tablet_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          desktop_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        features {
          slug
          title
          description
          icon {
            icon
            width
            height
          }
        }
      }
    }
  }
`;
export default IndexPage

export const Head: HeadFC = () => <AppSeo title="Features" />