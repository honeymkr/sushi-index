exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
  query {
    allContentfulSushiFish {
      edges {
        node {
          id
          fishName
          commonName
          allergies
          whatToLookFor
          fishImages {
            gatsbyImageData
          }
        }
      }
    }
  }
  `)

  results.data.allContentfulSushiFish.edges.forEach(edge => {
    const product = edge.node;
    // DOUBLE CHECK THIS ??

    createPage({
      path: `/fish/${product.fishName}/`,
      component: require.resolve("./src/templates/sushi-fish.js"),
      context: {
        id: product.id,
      },
    })
  })
}