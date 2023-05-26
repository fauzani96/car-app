import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from '@mui/material'

import CorvetteLogo from '../../../assets/images/corvette.svg'
import FerrariLogo from '../../../assets/images/ferrari.svg'
import LamborghiniLogo from '../../../assets/images/lamborghini.svg'
import LexusLogo from '../../../assets/images/lexus.svg'
import NissanLogo from '../../../assets/images/nissan.svg'
import TeslaLogo from '../../../assets/images/tesla.svg'
import ToyotaLogo from '../../../assets/images/toyota.svg'
import Marquee from 'react-fast-marquee'
import {Link} from 'react-router-dom'

const Galery = () => {
  return (
    <Box sx={{textAlign: 'center'}}>
      <Typography variant="h4" gutterBottom sx={{mt: 8, mb: 4}}>
        Cars Galery
      </Typography>
      <ImageList variant="masonry" cols={3} gap={10}>
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            onClick={() => alert('hey you clicked!')}
            sx={{cursor: 'pointer'}}
          >
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
      <Button variant="outlined" size="large" component={Link} to="cars">
        See More
      </Button>
      <Marquee
        style={{
          margin: '42px 0',
          justifyContent: 'center',
        }}
        autoFill
      >
        {logoData.map((logo) => (
          <img
            src={logo}
            key={logo}
            alt="corvette"
            width="100"
            style={{marginRight: 48}}
          />
        ))}
      </Marquee>
    </Box>
  )
}

const logoData = [
  CorvetteLogo,
  FerrariLogo,
  LamborghiniLogo,
  LexusLogo,
  NissanLogo,
  TeslaLogo,
  ToyotaLogo,
]

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8',
    title: 'Mustang GT',
  },
  {
    img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537',
    title: 'BMW M4',
  },
  {
    img: 'https://images.unsplash.com/photo-1666919643134-d97687c1826c',
    title: 'Hyundai GV60',
  },
  {
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
    title: 'Porsche Tulsa',
  },
  {
    img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf',
    title: 'Ford Explorer',
  },
  {
    img: 'https://images.unsplash.com/photo-1580414057403-c5f451f30e1c',
    title: 'Lamborghini Aventador',
  },
  {
    img: 'https://images.unsplash.com/photo-1562141961-b5d1dfb57448',
    title: 'Bugatti Chiron',
  },
]

export default Galery
