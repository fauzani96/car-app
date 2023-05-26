import {Box, Button, Container, Divider, Typography} from '@mui/material'
import Galery from './section/Galery.component'
import HowTo from './section/HowTo.component'
import HomeCar from '../../assets/images/home-car.jpg'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
      <img src={HomeCar} alt="home" className="bg-image" />
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
          <Typography variant="h6">
            Our goal is for our car database to contain all data about all cars.
            We want to make it easy to find the right car, make accurate car
            valuations, compare statistics and verify car history.
          </Typography>
          <Button variant="contained" size="large" component={Link} to="cars">
            browse car
          </Button>
        </Box>
        <Galery />
        <Divider />
        <HowTo />
      </Container>
    </>
  )
}

export default Home
