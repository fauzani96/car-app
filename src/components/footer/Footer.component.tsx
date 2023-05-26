import {Box, Container, Typography} from '@mui/material'
import GithubIcon from '../../assets/images/github.svg'

const Footer = () => {
  return (
    <Box sx={{bgcolor: 'primary.main'}}>
      <Container maxWidth="xl" sx={{p: 2}}>
        <Typography
          variant="body1"
          color="common.white"
          sx={{textAlign: 'center'}}
        >
          Made with love by{' '}
          <Typography
            component="a"
            color="common.white"
            href="https://github.com/fauzani96/car-app"
          >
            Fauzani Shah Allam <img src={GithubIcon} alt="github" />
          </Typography>
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
