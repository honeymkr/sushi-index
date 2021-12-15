import * as React from "react"
import  { graphql} from "gatsby"
import Layout from "../components/layout"



const fishList = ({data}) => {

    return (
        <Layout>

        <h1>Fish</h1>
            <ul>
                   { data.allContentfulSushiFish.edges.map( ({ node, index }) => (
                    <li key={node.id} >
                       <a href={node.fishName} alt="fishy"> {node.fishName }</a>
                   </li> 
                   )) }
            </ul>
        </Layout>
)}

export default fishList

export const query = graphql`
{
    allContentfulSushiFish{
      edges {
        node {
          id
          fishName
        }
      }
    }
  }`

