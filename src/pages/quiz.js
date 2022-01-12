import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {StaticImage} from "gatsby-plugin-image"
import {graphql} from "gatsby"
import { Stack, TextField, Input, Button, Grid } from "@mui/material"



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

// set answer const from data.props
/// some sort of event listener for button click
// textfield check
// run function to check for answer


    return (
        
 <Layout>
        <Seo title="Quiz" />


<Grid container spacing={3}>

  <Grid item xs={12} md={4} lg={3}>
  <h1>Which fish is this?</h1>
  <h3>Simply type your answer into each textfield and click the submit to check your answer.</h3>
  <p>Type your answers in lowercase.</p>
  </Grid>

<Grid item xs={12} md={6} lg={8}>

<Stack spacing={2}>
<StaticImage style={{border:"none", width:"600px"}}
    src="../images/tako.jpg"
    alt="tako"
    />

<TextField id="outlined-basic" label="Common Name ?" 
variant="outlined" onChange={handleChange} inputProps={someThing}
/>
<Button variant="text" >Submit</Button>

<TextField id="outlined-basic" label="Japanese Name?" variant="outlined" />
<Button variant="text" >Submit</Button>

<TextField id="outlined-basic" label="Tasting Notes?" variant="outlined" />
<Button variant="text" >Submit</Button>

</Stack>
</Grid>
</Grid>
    </Layout>
)
    }

export default QuizPage