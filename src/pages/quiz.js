import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {StaticImage} from "gatsby-plugin-image"
import {graphql} from "gatsby"
import { TextField, Input, Grid } from "@mui/material"



export const query = graphql`
query ($id: String) {
    contentfulSushiFish(id: {eq: $id}) {
      fishName
      commonName
      whatToLookFor
      fishImages {
        gatsbyImageData(layout: CONSTRAINED, width: 500 )
        file {
          url
          fileName
          contentType
        }
      }
    }
  }`



const QuizPage = ({data}) => {

  //const cNameAnswer = data.contentfulSushiFish.commonName;
  //const jNameAnswer = data.contentfulSushiFish.fishName;
  //let userAnswer =  "";


    return (
        
 <Layout>
        <Seo title="Quiz" />
<Grid container spacing={3}>

  <Grid item xs={3}>
  <h1>Quiz Time!</h1>
  </Grid>

<Grid item xs={6}>
<StaticImage style={{border:"none", width:"420px"}}
src="../images/tako.jpg"
alt="tako"
/>

<TextField id="outlined-basic" label="Common Name ?" variant="outlined" />
<TextField id="outlined-basic" label="Japanese Name?" variant="outlined" />
<TextField id="outlined-basic" label="Tasting Notes?" variant="outlined" />

</Grid>




</Grid>




<ul style={{margin: "2rem"}}>
    <li>Hero image loads with pagination style arrows to cycle through database by photo</li>
    <li>A blank field and prompt to sumbit your answer</li>
    <li>Pagination for quiz elements?     </li>
</ul>

    </Layout>


)
    }


export default QuizPage