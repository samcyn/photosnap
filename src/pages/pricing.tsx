import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from 'gatsby';
import { IGatsbyImageData } from "gatsby-plugin-image";


import AppPageLayout from "../components/layout/AppPageLayout";
import AppSeo from "../components/AppSeo";
import { AppCardWithPhoto, AppCardWithMain, AppCardWithIcon } from "../components/shared/cards";
import { IconTypes } from "../lib/iconLibrary";
import AppIcon from "../components/shared/AppIcon";

type ImageSharpProp = {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
}

type MetaData = {
  title: string
  description: string
  slug: string
  desktop_image: ImageSharpProp
}

type Plan = {
  slug: string
  type: string
  description: string
  yearly_fee: number
  monthly_fee: number
}

type Metric = {
  type: string
  basic: boolean
  pro: boolean
  business: boolean
}

type Props = {
  mdx: {
    frontmatter: {
      slug: string
      title: string
      metadata_intro: MetaData
      plans: Plan[]
      metrics: Metric[]
      metadata_extras: {
        slug: string
        title: string
        desktop_image: ImageSharpProp
      }
    }
  }
}

const PricingPage: React.FC<PageProps<Props>> = ({
  data
}) => {
  const {
    metadata_intro,
    metadata_extras,
    plans,
    metrics
  } = data.mdx.frontmatter;

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
          bodyClassName="px-3 py-18 md:px-38px md:py-0 xl:px-24"
          className="w-full md:w-2/3 md:basis-2/3 xl:w-5/12 xl:basis-5/12 justify-center items-center bg-black text-white py-0 md:py-43 xl:py-43 md:order-1"
          descriptionClassName="text-15px leading-25px mix-blend-normal opacity-60"
        />
      </section>
      <section className="px-3 py-16 md:px-6 md:py-28 lg:px-0 lg:pt-30 lg:pb-40">
        <div className="container">
          <h3
            className="hidden md:block text-center uppercase font-bold tracking-fourths text-40px leading-12 text-black mb-16"
          >
            Compare
          </h3>
          <ul className="px-0 m-0 list-none max-w-[687px] mx-auto">
            <li className="flex flex-col md:flex-row justify-between pb-6 gap-4 border-b-[1px] border-black mb-6">
              <div className="font-bold text-xs tracking-2px text-black shrink grow basis-0">The Features</div>
              <ul className="p-0 m-0 hidden list-none md:flex grow-[3] basis-0 gap-[70px] md:gap-0">
                <li className="font-bold text-xs tracking-2px text-black text-center basis-0 md:basis-1/3">Basic</li>
                <li className="font-bold text-xs tracking-2px text-black text-center basis-0 md:basis-1/3">Pro</li>
                <li className="font-bold text-xs tracking-2px text-black text-center basis-0 md:basis-1/3">Business</li>
              </ul>
            </li>
            {
              metrics.map(metric => (
                <li key={metric.type} className="flex flex-col md:flex-row justify-between pb-6 gap-4  border-b-[1px] border-black [&:not(:last-of-type)]:mb-6">
                  <div className="font-bold text-xs tracking-2px text-black shrink grow basis-0">{metric.type}</div>
                  <ul className="p-0 m-0 list-none flex items-start grow-[3] basis-0 gap-[70px] md:gap-0">
                    <li className="font-bold text-[10px] leading-[13px] tracking-[1.6667px] text-black/30 flex flex-col md:flex-row gap-2 justify-center text-center basis-0 md:basis-1/3">
                      <span className="md:hidden">Basic</span>
                      { metric.basic && <AppIcon icon="check" width="18px" height="15" /> }
                    </li>
                    <li className="font-bold text-[10px] leading-[13px] tracking-[1.6667px] text-black/30 flex flex-col md:flex-row gap-2 justify-center text-center basis-0 md:basis-1/3">
                      <span className="md:hidden">Pro</span>
                      { metric.pro && <AppIcon icon="check" width="18px" height="15" /> }
                    </li>
                    <li className="font-bold text-[10px] leading-[13px] tracking-[1.6667px] text-black/30 flex flex-col md:flex-row gap-2 justify-center text-center basis-0 md:basis-1/3">
                      <span className="md:hidden">Business</span>
                      { metric.business && <AppIcon icon="check" width="18px" height="15" /> }
                    </li>
                  </ul>
                </li>
              ))
            }
          </ul>
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
    mdx(frontmatter: {slug: {eq: "pricing_page"}}) {
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
        plans {
          slug
          type
          description
          yearly_fee
          monthly_fee
        }
        metrics {
          type
          basic 
          pro 
          business
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
export default PricingPage

export const Head: HeadFC = () => <AppSeo title="Pricing" />