import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Theme,
  Typography,
  useMediaQuery,
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
import {galeryData} from '../../../constants/Galery.constant'

const Galery = () => {
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'))
  return (
    <Box sx={{textAlign: 'center'}}>
      <Typography variant="h4" gutterBottom sx={{mt: 8, mb: 4}}>
        Cars Galery
      </Typography>
      <ImageList variant="masonry" cols={matches ? 3 : 2} gap={10}>
        {galeryData.map((item) => (
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

export default Galery
