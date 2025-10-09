const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  const result = await graphql(`
    query {
      allDataJson {
        edges {
          node {
            projects {
              title
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  result.data.allDataJson.edges.forEach(({ node }) => {
    node.projects.forEach(project => {
      const safeSlug = project.slug || project.title.toLowerCase().replace(/\s+/g, "-")

      createPage({
        path: `/project/${safeSlug}`,
        component: path.resolve("./src/templates/project-detail.js"),
        context: {
          title: project.title,
          slug: safeSlug,
        },
      })
    })
  })
}
