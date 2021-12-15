import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


// THE SUSHI FUSH COMPONENT FOR MAKING PAGES ETC
 
 export const query = graphql`
    query ($id: String){
      contentfulSushiFish(id: {eq: $id }) {
        fishName
        commonName
        allergies
        whatToLookFor
      }
    }`

const Sushi = ({ data }) => {
  const sushi = data.contentfulSushiFish;
  
  return (
    <Layout>
      <h1>{sushi.fishName}</h1>
      <h2>{sushi.commonName}</h2>
      <h4>{sushi.id}</h4>


      <p>{sushi.whatToLookFor}</p>
      <div dangerouslySetInnerHTML={{ __html: sushi.allergies }} />


    </Layout>
  )
}
export default Sushi