import {Box, Button, TextField, Typography} from '@mui/material'
import PaletteIcon from '@mui/icons-material/Palette'
import SettingsIcon from '@mui/icons-material/Settings'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'

const HowTo = () => {
  const steps = [
    {
      icon: <PaletteIcon fontSize="large" />,
      title: 'Choose model',
      subtitle: 'Lorem ipsum dolor sit amet',
    },
    {
      icon: <SettingsIcon fontSize="large" />,
      title: 'Choose location',
      subtitle: 'Lorem ipsum dolor sit amet',
    },
    {
      icon: <DirectionsCarIcon fontSize="large" />,
      title: 'Show the car',
      subtitle: 'Lorem ipsum dolor sit amet',
    },
  ]
  return (
    <>
      <Box sx={{textAlign: 'center', mt: 8}}>
        <Typography variant="h6" paragraph>
          How it work?
        </Typography>
        <Typography variant="h4" gutterBottom>
          A better way to search for cars
        </Typography>
        <Typography variant="body2" color="text.secondary">
          We have created a car database and our goal is for it to contain all
          kinds of data regarding cars. The purpose of the database is to make
          the car market more transparent and less complicated. Examples of data
          are car specifications, classifieds, mileages and reviews. By
          structuring the data, we want to make it easier to find the right car,
          make correct car valuations, compare statistics, confirm a car's
          history and find the right accessories. The target group is everyone
          that has anything to do with cars, such as owners, buyers and sellers
          – both consumers and those that in any way work in the industry. We
          realise that it is a large and extensive task to build a car
          information website and we greatly appreciate suggestions on how we
          can improve.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          mt: 4,
          gap: 4,
          flexDirection: {xs: 'column', md: 'row'},
        }}
      >
        {steps.map((step, i) => (
          <Box
            key={i}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: 1,
              borderRadius: 2,
              borderColor: 'rgba(0, 0, 0, 0.12)',
              py: 2,
              px: 6,
              width: {md: 1 / 3},
            }}
          >
            <Box
              sx={{
                bgcolor: 'primary.main',
                color: 'common.white',
                borderRadius: 2,
                p: 1.5,
                mb: 4,
              }}
            >
              {step.icon}
            </Box>

            <Typography variant="h6">{step.title}</Typography>
            <Typography variant="body1" color="text.secondary">
              {step.subtitle}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          my: 8,
        }}
      >
        <Typography variant="h4" paragraph>
          Save time, save money
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Sign up and we'll send the best deal to you
        </Typography>
        <Box sx={{display: 'flex', width: {md: 1 / 2}, gap: 2}}>
          <TextField
            id="outlined-basic"
            label="Enter your email address"
            fullWidth
            variant="outlined"
          />
          <Button variant="contained">Subscribe</Button>
        </Box>
      </Box>
    </>
  )
}

export default HowTo
