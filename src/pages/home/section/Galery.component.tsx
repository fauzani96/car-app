import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from '@mui/material'

const Galery = () => {
  return (
    <Box sx={{textAlign: 'center'}}>
      <Typography variant="h5" gutterBottom sx={{mt: 6}}>
        Cars Galery
      </Typography>
      <ImageList variant="masonry" cols={3} gap={10}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
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
      <Button variant="outlined" size="large">
        View More
      </Button>
    </Box>
  )
}

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
