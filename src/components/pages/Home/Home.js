import React, { useCallback } from 'react'
import { Container, Grid, Button, Typography, Link } from '@mui/material'

function Home({ media }) {
  return (
    <>
      <Grid className="container container-head container-home">
        <Container>
          <Grid container>
            <Grid container>
              <Grid item xs={12} md={12}>
                <h1>IRC</h1>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  )
}
export default Home
