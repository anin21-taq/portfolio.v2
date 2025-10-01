const path = require("path")

// Create pages dynamically if needed
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  // Example: Create project detail pages
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
    actions.createPage({
      path: `/project/${project.slug}`,
      component: path.resolve("./src/templates/project-detail.js"),
      context: {
        title: project.title,
        slug: project.slug
      },
    })
  })
})

}
