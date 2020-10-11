const path = require(`path`)

// pages locale
exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions
    deletePage(page)
    // You can access the variable "locale" in your page queries now
    createPage({
        ...page,
        context: {
            ...page.context,
            locale: page.context.intl.language,
        },
    })
}

// blog posts
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/templates/blogPost.js`)
    const blogListingTemplate = path.resolve(`src/templates/blogListing.js`)


    const blogListing = new Promise((resolve, reject) => {
      graphql(`
        query MyQuery {
          allContentfulBlogPost {
            edges {
              node {
                id
                path
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        const blogListingData = result.data.allContentfulBlogPost.edges
        const blogCardsPerPage = 6
        const numPages = Math.ceil(blogListingData.length / blogCardsPerPage)
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/blog` : `/blog/${i + 1}`,
            component: blogListingTemplate,
            context: {
              limit: blogCardsPerPage,
              skip: i * blogCardsPerPage,
              numPages,
              currentPage: i + 1,
            },
          })
        })
        resolve()
      })
    })
    // Query for markdown nodes to use in creating pages.
    // You can query for whatever data you want to create pages for e.g.
    // products, portfolio items, landing pages, etc.
    // Variables can be added as the second function parameter
    const blogPage = new Promise((resolve, reject) => {
      graphql(`
        query MyQuery {
          allContentfulBlogPost {
            edges {
              node {
                id
                path
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
  
        result.data.allContentfulBlogPost.edges.forEach(edge => {
          const path = `/blog${edge.node.path}`
          const pathSlug = edge.node.path
          createPage({
              // Path for this page — required
              path: path,
              component: blogPostTemplate,
              context: {
                  slug: pathSlug,
              },
          })
        })
        resolve()
      })
    })
    return Promise.all([
      blogPage,
      blogListing
    ])
}
