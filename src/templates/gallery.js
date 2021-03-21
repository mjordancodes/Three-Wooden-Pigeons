import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'

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
let clickedImage = '';

function ImageModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <GatsbyImage image={getImage(clickedImage)} alt={clickedImage.description} />   
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

const GalleryTemplate = (props) => {
  const album = props.data.contentfulPhotoGallery
  const [modalShow, setModalShow] = React.useState(false)

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
                                <div key={index}
                                     onClick={() => {
                                         setModalShow(true)
                                         clickedImage = value;
                                     }}
                                >
                                    <GatsbyImage image={getImage(value)} alt={value.description} />
                                </div>
                            )
                        })}
                    </div>
                </Col>
            </Row>
        </Container>

        <ImageModal 
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        
    </main>
  )
}

export default GalleryTemplate
