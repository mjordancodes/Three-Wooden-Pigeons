import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import '../sass/gallery.scss'

export const pageQuery = graphql`
  query {
    allContentfulPhotoGallery(sort: {order: DESC, fields: dateTaken}) {
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
  const albums = data.allContentfulPhotoGallery.nodes


  return (
    <main>

      <section id="gallery">
        <h2>Photography Galleries by Location</h2>
        <div className="gallery">

          {albums.map((value, index) => {
            return (
              <div key={index}>
                <GatsbyImage image={getImage(value.thumbnail)} alt="Photo Gallery" />
                <p>{value.galleryTitle}</p>
              </div>
            )
          })}

        </div>
      </section>

    </main>
  )
}

export default IndexPage
