import * as React from "react";
import { navigate } from "gatsby";
import type {
  HeadFC,
  PageProps,
} from "gatsby";
import { graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

import AppPageLayout from "../components/layout/AppPageLayout";
import AppSeo from "../components/AppSeo";
import {
  AppCardWithPhoto,
  AppCardWithMain,
  AppCardWithPhotoAndText,
  AppCardWithIcon,
} from "../components/shared/cards";
import { IconTypes } from "../lib/iconLibrary";

type ImageSharpProp = {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
};

type P = {
  title: string;
  description: string;
  slug: string;
  mobile_image: ImageSharpProp;
  tablet_image: ImageSharpProp;
  desktop_image: ImageSharpProp;
};

interface Story extends P {
  published: string;
  author: string;
  publishedDate: string;
}

type Props = {
  mdx: {
    frontmatter: {
      slug: string;
      title: string;
      beautiful_stories: P;
      designed_for_everyone: P;
      create_and_share: P;
      stories: Story[];
      features: {
        slug: string;
        title: string;
        description: string;
        icon: {
          icon: IconTypes;
          width: string;
          height: string;
        };
      }[];
    };
  };
};

const IndexPage: React.FC<
  PageProps<Props>
> = ({ data }) => {
  const {
    create_and_share,
    beautiful_stories,
    designed_for_everyone,
    stories,
    features,
  } = data.mdx.frontmatter;

  // note function must return React.MouseEventHandler<Element> | undefined
  const onCallToAction = (slug: string): React.MouseEventHandler<Element> | undefined => (e) => {
    navigate(`/stories/${slug}/`)
  };

  return (
    <AppPageLayout>
      <section className="flex flex-wrap flex-col md:flex-row">
        <AppCardWithPhoto
          src={
            create_and_share.desktop_image
          }
          alt={
            create_and_share.title
          }
          className="w-full md:w-1/3 md:basis-1/3 xl:w-7/12 xl:basis-7/12 h-294px md:h-auto md:order-2"
        />

        <AppCardWithMain
          title="Create and share your photo stories."
          description="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
          callToActionText="Get An Invite"
          showIndicator
          className="w-full md:w-2/3 md:basis-2/3 xl:w-5/12 xl:basis-5/12 justify-center items-center bg-black text-white py-0 md:py-43 xl:py-43 md:order-1"
        />
      </section>
      <section className="flex flex-wrap flex-col md:flex-row">
        <AppCardWithPhoto
          src={
            beautiful_stories.desktop_image
          }
          alt={
            beautiful_stories.title
          }
          className="w-full md:w-1/3 md:basis-1/3 xl:w-7/12 xl:basis-7/12 h-68 md:h-auto"
        />

        <AppCardWithMain
          title="BEAUTIFUL STORIES EVERY TIME"
          description="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
          className="w-full md:w-2/3 md:basis-2/3 xl:w-5/12 xl:basis-5/12 justify-center items-center bg-white text-black py-0 md:py-34 xl:py-43"
          callToActionText="View the stories"
        />
      </section>

      <section className="flex flex-wrap flex-col md:flex-row">
        <AppCardWithPhoto
          src={
            designed_for_everyone.desktop_image
          }
          alt={
            designed_for_everyone.title
          }
          className="w-full md:w-1/3 md:basis-1/3 xl:w-7/12 xl:basis-7/12 h-68 md:h-auto md:order-2"
        />
        <AppCardWithMain
          title="DESIGNED FOR EVERYONE"
          description="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it."
          className="w-full md:w-2/3 md:basis-2/3 xl:w-5/12 xl:basis-5/12 justify-center items-center bg-white text-black py-0 md:py-40 xl:py-43 md:order-1"
          callToActionText="View the stories"
        />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {stories.map(
          (story) => (
            <AppCardWithPhotoAndText
              key={story.slug}
              storyTitle={
                story.title
              }
              storyAuthor={`by ${story.author}`}
              src={
                story.desktop_image
              }
              callToActionText="Read Story"
              alt="story"
              className="h-375px md:h-125"
              onCallToAction={onCallToAction(story.slug)}
            />
          )
        )}
      </section>
      <section className="px-4 py-20 md:px-35 md:py-30 lg:px-0">
        <div className="flex flex-col gap-14 md:gap-20 lg:flex-row lg:gap-30px container">
          {features.map(
            (feature) => (
              <AppCardWithIcon
                key={
                  feature.slug
                }
                title={
                  feature.title
                }
                description={
                  feature.description
                }
                iconProps={
                  feature.icon
                }
              />
            )
          )}
        </div>
      </section>
    </AppPageLayout>
  );
};

export const query = graphql`
	query MyQuery {
		mdx(
			frontmatter: {
				slug: {
					eq: "home_page"
				}
			}
		) {
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
					status
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
export default IndexPage;

export const Head: HeadFC =
  () => (
    <AppSeo title="Home" />
  );
