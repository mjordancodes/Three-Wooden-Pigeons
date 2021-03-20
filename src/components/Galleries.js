import React from 'react'
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

class Galleries extends React.Component {
    render() {
        return (
            <div className="galleries">

                {this.props.albums.map((value, index) => {
                    return (
                    <div key={index}>
                        <Link to={`/${value.slug}`}>
                        <GatsbyImage image={getImage(value.thumbnail)} alt="Photo Gallery" />
                        <p>{value.galleryTitle}</p>
                        </Link>
                    </div>
                    )
                })}

            </div>
        )
    }
}

export default Galleries