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
  desktop_image: ImageSharpProp
}

type Props = {
  mdx: {
    frontmatter: {
      slug: string
      title: string
      metadata_intro: P
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
      metadata_extras: {
        slug: string
        title: string
        desktop_image: ImageSharpProp
      }
    }
  }
}

const IndexPage: React.FC<PageProps<Props>> = ({
  data
}) => {
  const {
    metadata_intro,
    metadata_extras,
    features
  } = data.mdx.frontmatter;
  // 64.45
  return (
    <AppPageLayout>
      <section className="flex flex-wrap flex-col md:flex-row">
        <AppCardWithPhoto
          src={metadata_intro.desktop_image}
          alt={metadata_intro.title}
          className="w-full md:w-1/3 md:basis-1/3 xl:w-7/12 xl:basis-7/12 h-294px md:h-auto md:order-2"
        />

        <AppCardWithMain
          title={metadata_intro.title}
          description={metadata_intro.description}
          showIndicator
          bodyClassName= "px-3 py-18 md:px-38px md:py-0 xl:px-24"
          className="w-full md:w-2/3 md:basis-2/3 xl:w-5/12 xl:basis-5/12 justify-center items-center bg-black text-white py-0 md:py-43 xl:py-43 md:order-1"
          descriptionClassName="text-15px leading-25px mix-blend-normal opacity-60"
        />
      </section>
      <section className="px-4 py-20 md:px-6 md:py-28 lg:px-0 lg:py-40">
        <div className="container">
          <div className="flex flex-wrap -my-7 md:-mx-6px md:-my-9 lg:-mx-15px lg:-my-13">
            {
              features.map(feature => (
                <AppCardWithIcon
                  className="text-black w-full basis-full md:w-1/2 md:basis-1/2 lg:w-1/3 lg:basis-1/3 py-7 md:px-6px md:py-9 lg:px-15px lg:py-13"
                  key={feature.slug}
                  title={feature.title}
                  description={feature.description}
                  iconProps={feature.icon}
                />
              ))
            }
          </div>
        </div>
      </section>
      <section>
        <AppCardWithMain
          title={metadata_extras.title}
          src={metadata_extras.desktop_image}
          showIndicator
          className="w-full justify-center items-center bg-black text-white"
          titleClassName="text-32px leading-10 tracking-thirds mb-3 md:text-40px md:leading-12 uppercase md:tracking-fourths md:mb-0 md:max-w-[400px]"
          descriptionClassName="text-15px leading-25px mix-blend-normal opacity-60"
          bodyClassName="px-4 py-16 md:px-6 md:py-17"
          containerClassName="md:flex-row md:gap-30 justify-between"
          actionButtonClassName="uppercase text-inherit pl-0 pb-0 md:p-0"
          callToActionText="Get An Invite"
        />
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
        metadata_intro {
          slug
          title
          description
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
        metadata_extras {
          slug
          title
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
export default IndexPage

export const Head: HeadFC = () => <AppSeo title="Features" />