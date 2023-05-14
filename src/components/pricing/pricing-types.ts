import { IGatsbyImageData } from "gatsby-plugin-image"

export type Metric = {
  type: string
  basic: boolean
  pro: boolean
  business: boolean
}

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

export type Plan = {
  slug: string
  type: string
  value: string
  description: string
  yearly_fee: number|string
  monthly_fee: number|string
}

export type PricingPageProps = {
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