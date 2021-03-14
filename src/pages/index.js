import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const pageQuery = graphql`
  query {
    allContentfulPhotoGallery {
      nodes {
        galleryTitle
        thumbnail {
          gatsbyImageData(placeholder: BLURRED)
          file {
            url
          }
        }
      }
    }
  }
`

const IndexPage = ({data}) => {
  const image = getImage(data.allContentfulPhotoGallery.nodes[0].thumbnail)
  return (
    <main>
      <p>hello world!</p>
      <GatsbyImage image={image} alt="hello" />
    </main>
  )
}

export default IndexPage
