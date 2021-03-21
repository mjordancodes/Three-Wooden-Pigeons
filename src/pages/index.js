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
        galleryCategory
        slug
        thumbnail {
          gatsbyImageData(
            placeholder: BLURRED
            layout: CONSTRAINED
            width: 400
            height: 300
            )
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

  const californiaGalleries = []
  const coloradoGalleries = []
  const israelGalleries = []
  const peopleGalleries = []
  const animalGalleries = []

  for (var i = 0; i < allGalleries.length; i++) {
    if (allGalleries[i].galleryCategory === 'California') {
      californiaGalleries.push(allGalleries[i])
    }
    if (allGalleries[i].galleryCategory === 'Colorado') {
      coloradoGalleries.push(allGalleries[i])
    }
    if (allGalleries[i].galleryCategory === 'Israel') {
      israelGalleries.push(allGalleries[i])
    }
    if (allGalleries[i].galleryCategory === 'People') {
      peopleGalleries.push(allGalleries[i])
    }
    if (allGalleries[i].galleryCategory === 'Animals') {
      animalGalleries.push(allGalleries[i])
    }
  }


  return (
    <main>
    <Navigation />
    <Container>
      <Row>
        <Col id="galleries">
          <h2>Location: United States</h2>

            <h3>California</h3>
              <Galleries albums={californiaGalleries} />
            <h3>Colorado</h3>
              <Galleries albums={coloradoGalleries} />

          <h2>Location: Israel</h2>
            <Galleries albums={israelGalleries} />

          <h2>People</h2>
            <Galleries albums={peopleGalleries} />

          <h2>Animals</h2>
            <Galleries albums={animalGalleries} />
        </Col>
      </Row>
    </Container>

    </main>
  )
}

export default IndexPage
