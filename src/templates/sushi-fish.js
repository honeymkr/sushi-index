import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

// THE SUSHI FISH COMPONENT FOR MAKING PAGES ETC
 
 export const query = graphql`
 query ($id: String) {
  contentfulSushiFish(id: {eq: $id}) {
    fishName
    commonName
    allergies
    whatToLookFor
    fishImages {
      gatsbyImageData(layout: CONSTRAINED, width: 125 )
      file {
        url
        fileName
        contentType
      }
    }
  }
}`

const Sushi = ({ data }) => {

  const sushi = data.contentfulSushiFish;

  return (
<Layout>
<Link to="/fish">BACK</Link>
<table>
<tbody>

  <tr>
    <th>Photo(s)</th>
    <th>Common Name</th>
    <th>Japanese Name</th>
    <th>What to Look For</th>
    <th>Allergy</th>
  </tr>
  <tr>
    <td><GatsbyImage image={data.contentfulSushiFish.fishImages[0].gatsbyImageData} alt={'alt text'} /></td>
    <td>{sushi.commonName}</td>
    <td>{sushi.fishName}</td>
    <td>{sushi.whatToLookFor}</td>
    <td> <div dangerouslySetInnerHTML={{ __html: sushi.allergies }} /> </td>
  </tr>

  </tbody>
</table> 
  

    </Layout>
  )
}
export default Sushi