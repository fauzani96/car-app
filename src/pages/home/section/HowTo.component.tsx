import {Box, Typography} from '@mui/material'
import PaletteIcon from '@mui/icons-material/Palette'
import SettingsIcon from '@mui/icons-material/Settings'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'

const HowTo = () => {
  const steps = [
    {
      icon: <PaletteIcon />,
      title: 'Choose model',
      subtitle: 'Lorem ipsum dolor sit amet',
    },
    {
      icon: <SettingsIcon />,
      title: 'Choose location',
      subtitle: 'Lorem ipsum dolor sit amet',
    },
    {
      icon: <DirectionsCarIcon />,
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          ullamcorper velit id nulla bibendum dictum. Quisque molestie orci
          nisl. Duis tempor purus urna, suscipit ornare ex elementum faucibus.
          Sed bibendum, nulla eu ornare efficitur, nibh ex fermentum eros, et
          ultricies nulla neque pharetra quam. Nam sollicitudin augue vitae erat
          dapibus, at viverra nisi mattis. Cras nec magna sed diam hendrerit
          tempus. Fusce condimentum arcu quis elit gravida volutpat. Nam
          consequat convallis malesuada. Vivamus sed vestibulum neque. Cras
          tincidunt eget erat facilisis placerat. Quisque in massa in purus
          faucibus pharetra quis ut nibh.
        </Typography>
      </Box>
      <Box sx={{display: 'flex', mt: 4, justifyContent: 'space-between'}}>
        {steps.map((step, i) => (
          <Box
            key={i}
            sx={{
              textAlign: 'center',
              border: 1,
              borderRadius: 2,
              borderColor: 'rgba(0, 0, 0, 0.12)',
              py: 2,
              px: 6,
            }}
          >
            {step.icon}
            <Typography variant="h6">{step.title}</Typography>
            <Typography variant="body1" color="text.secondary">
              {step.subtitle}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  )
}

export default HowTo
