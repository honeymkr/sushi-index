import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Grid, Box } from "@mui/material"



const IndexPage = () => (

    <Layout>
        <Seo title="About" />
    <Grid container spacing={2}>
        <Grid item xs={6}>
        <h2>Learning sushi can be relatively difficult. There's lots of resources and ways to learn sushi in depth. The best is to simply hangout at the sushi bar and ask questions.
            However, that's not always an option or always convenient so we've put together a simple way to test your 
            knowledge on the go or anytime that works for you!
        </h2>
        </Grid>
        <Grid item xs={6}>
            <Box 
            sx={{
                width: 400,
                height: 260,
                backgroundColor: 'primary.dark',
                '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9,0.8,0.7],
                },
                }}
            />
        </Grid>
    </Grid>
       

    </Layout>
  


)


export default IndexPage