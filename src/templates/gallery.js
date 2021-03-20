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

function ImageModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
                </p>
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
                                     onClick={() => setModalShow(true)}
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
