import * as React from "react"
import { graphql } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import '../sass/gallery.scss'

export const query = graphql`
  query($pathSlug: String!) {
        contentfulPhotoGallery(slug: {eq: $pathSlug}) {
            galleryTitle
            slug
            photos {
                description
                gatsbyImageData(placeholder: BLURRED)
                file {
                    url
                }
            }
        }
    }
`

const GalleryTemplate = (props) => {
  console.log(props)
  return (
    <main>
        <h1>Gallery: {props.data.contentfulPhotoGallery.galleryTitle}</h1>
    </main>
  )
}

export default GalleryTemplate
