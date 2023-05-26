import {Box, Button, Container, Divider, Typography} from '@mui/material'
import Galery from './section/Galery.component'
import HowTo from './section/HowTo.component'

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          width: 1 / 2,
          color: 'white',
          minHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'center',
          gap: 6,
        }}
      >
        <Typography variant="h1">
          A litle care for your dream vehicle
        </Typography>
        <Typography variant="h5">
          A litle care for your dream vehicle A litle care for your dream
          vehicle
        </Typography>
        <Button variant="contained" size="large">
          browse car
        </Button>
      </Box>
      <Galery />
      <Divider />
      <HowTo />
    </Container>
  )
}

export default Home
