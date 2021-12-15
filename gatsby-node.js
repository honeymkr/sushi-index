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






//
//
//exports.createPages = async ({ actions: {createPage}, graphql }) => {
//
//const results = await graphql(`
//{
//  allContentfulSushiFish {
//    edges {
//      node {
//        id
//        fishName
//        commonName
//        allergies
//      }
//    }
//  }
//}
//`)
//
//results.data.allContentfulSushiFish.edges.forEach(edge => {
//
//  const sushi = edge.node
//
//  createPage({
//    path: `/gql/${sushi.slug}/`,
//    component: require.resolve("./src/templates/sushi-fish.js"),
//    context: {
//      slug: sushi.slug,
//    }
//  })
//})
//}





/*

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}


*/