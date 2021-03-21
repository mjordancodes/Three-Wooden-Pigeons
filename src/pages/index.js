import * as React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'

import Galleries from '../components/Galleries'
import Navigation from '../components/Navigation'

import '../sass/gallery.scss'

export const pageQuery = graphql`
  query {
    allContentfulPhotoGallery(sort: {order: DESC, fields: dateTaken}) {
      nodes {
        galleryTitle
        slug
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
  const allGalleries = data.allContentfulPhotoGallery.nodes


  return (
    <main>
    <Navigation />
    <Container>
      <Row>
        <Col id="galleries">
          <h2>All Galleries</h2>
          
          <Galleries albums={allGalleries} />
        </Col>
      </Row>
    </Container>

    </main>
  )
}

export default IndexPage
