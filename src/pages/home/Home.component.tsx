import {Box, Container, Typography} from '@mui/material'

const Home = () => {
  return (
    <Container maxWidth="xl">
      <div style={{display: 'flex'}}>
        <Box>
          <Typography variant="h1">
            A litle care for your dream vehicle
          </Typography>
          <Typography variant="h5">
            A litle care for your dream vehicle A litle care for your dream
            vehicle
          </Typography>
        </Box>
        <Box>
          <Typography>+250</Typography>
          <Typography variant="h5">Experience</Typography>
        </Box>
      </div>
    </Container>
  )
}

export default Home
