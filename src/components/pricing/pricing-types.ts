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

type Plan = {
  slug: string
  type: string
  description: string
  yearly_fee: number
  monthly_fee: number
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