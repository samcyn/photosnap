import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from 'gatsby';
import { IGatsbyImageData } from "gatsby-plugin-image";


import AppPageLayout from "../components/layout/AppPageLayout";
import AppSeo from "../components/AppSeo";
import { AppCardWithPhoto, AppCardWithMain, AppCardWithPhotoAndText } from "../components/shared/cards";

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
    }
  }
}

const IndexPage: React.FC<PageProps<Props>> = ({
  data
}) => {
  const {
    create_and_share,
    beautiful_stories,
    designed_for_everyone,
    stories
  } = data.mdx.frontmatter;
  return (
    <AppPageLayout>
      <section>
        <AppCardWithPhoto
          src={create_and_share.desktop_image}
          alt="desktop image"
          className="h-[294px]"
        />

        <AppCardWithMain
          title='Create and share your photo stories.'
          description='Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.'
          callToActionText='Get An Invite'
          showIndicator
        />

        <AppCardWithPhoto
          src={beautiful_stories.desktop_image}
          alt="he"
          className="h-[271px]"
        />

        <AppCardWithMain
          title="BEAUTIFUL STORIES EVERY TIME"
          description="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
          className="justify-center items-center bg-white text-black py-0 md:py-[173px] xl:py-[172px]"
          callToActionText='View the stories'
        />

        <AppCardWithPhoto
          src={designed_for_everyone.desktop_image}
          alt="he"
          className="h-[271px]"
        />
        <AppCardWithMain
          title="DESIGNED FOR EVERYONE"
          description="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it."
          className="justify-center items-center bg-white text-black py-0 md:py-[173px] xl:py-[172px]"
          callToActionText='View the stories'
        />

        {/* stories */}
        {
          stories.map(story => (
            <AppCardWithPhotoAndText
              storyTitle={story.title}
              storyAuthor={story.author}
              src={story.desktop_image}
              callToActionText="Read Story"
              alt="story"
              className="h-[375px]"
            />
          ))
        }
      </section>
    </AppPageLayout>
  )
}


export const query = graphql`
query MyQuery {
  mdx(frontmatter: {slug: {eq: "home_page"}}) {
    frontmatter {
      slug
      title
      beautiful_stories {
        description
        title
        slug
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
      designed_for_everyone {
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
      stories {
        slug
        published
        title
        author
        slug
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
    }
  }
}
`;
export default IndexPage

export const Head: HeadFC = () => <AppSeo title="Home Page" />