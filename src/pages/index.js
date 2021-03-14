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
  const images = [];

  for ( let i = 0; i < data.allContentfulPhotoGallery.nodes.length; i++) {
    images.push(getImage(data.allContentfulPhotoGallery.nodes[i].thumbnail))
  }


  return (
    <main>
      {images.map((value, index) => {
        return <GatsbyImage image={value} alt="Photo Gallery" />
      })}
    </main>
  )
}

export default IndexPage
