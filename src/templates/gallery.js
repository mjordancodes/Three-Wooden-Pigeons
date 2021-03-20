import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Row, Col } from 'react-bootstrap'

import Navigation from '../components/Navigation'

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
  const album = props.data.contentfulPhotoGallery

  return (
    <main>
    <Navigation />
         <Container>
            <Row>
                <Col id="galleries">
                    <h1>{album.galleryTitle}</h1>
                    <div className="gallery">
                        {album.photos.map((value,index) => {
                            return (
                                <div key={index}>
                                    <GatsbyImage image={getImage(value)} alt={value.description} />
                                </div>
                            )
                        })}
                    </div>
                </Col>
            </Row>
        </Container>
        
    </main>
  )
}

export default GalleryTemplate
