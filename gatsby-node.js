const path = require('path')

exports.createPages = async function ({ actions, graphql }) {

    const { createPage } = actions
    return new Promise((resolve, reject) => {
        const galleryTemplate = path.resolve('src/templates/gallery.js')

        resolve(
            graphql(`
                query {
                    allContentfulPhotoGallery {
                        nodes {
                            slug
                        }
                    }
                }
            `).then(result => {
                result.data.allContentfulPhotoGallery.nodes.forEach(node => {
                    const slug = node.slug
                    actions.createPage({
                        path: slug,
                        component: require.resolve(`./src/templates/gallery.js`),
                        context: { pathSlug: slug },
                    })
                })
            })
        )
    })
    
    



}

