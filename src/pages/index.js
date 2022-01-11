import * as React from "react"
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import { Grid, Box, Button } from "@mui/material"
import Seo from "../components/seo"

const IndexPage = () => (

  <Layout>
    <Seo title="Home" />

    <Grid container spacing={2}>

    <Grid item  sm={8} md={12}>

      <Box 
      sx={{ 
        width:960,
      height:300,
      backgroundColor: 'primary.dark',
                '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9,0.8,0.7],
                },
      }}
      
      />

    <Button variant="contained" href="/fish/" 

    > START NOW!   </Button>


    </Grid>
    <Grid item sm={8} md={10}>
    <h3>Lorem Ipsum about how being able to talk at depth about sushi and japanese 
      foods empowers the guest to order with more confidence and servers create a bigger check!</h3>

    </Grid>

    </Grid>
   
    

  </Layout>
)

export default IndexPage
