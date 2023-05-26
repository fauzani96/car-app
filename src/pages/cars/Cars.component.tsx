import {
  Box,
  Chip,
  Container,
  IconButton,
  Paper,
  Skeleton,
  Typography,
} from '@mui/material'
import useSWR from 'swr'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import {galeryData} from '../../constants/Galery.constant'
import {useNavigate} from 'react-router-dom'

interface CarsResponse {
  city_mpg: number
  class: string
  combination_mpg: number
  cylinders: number
  displacement: number
  drive: string
  fuel_type: string
  highway_mpg: number
  make: string
  model: string
  transmission: keyof typeof Transmission
  year: number
}

enum Transmission {
  a = 'Automatic',
  m = 'Manual',
}

const Loading = () => {
  return (
    <>
      <Skeleton variant="rounded" sx={{width: 1 / 4}} height={300} />
      <Skeleton variant="rounded" sx={{width: 1 / 4}} height={300} />
      <Skeleton variant="rounded" sx={{width: 1 / 4}} height={300} />
      <Skeleton variant="rounded" sx={{width: 1 / 4}} height={300} />
    </>
  )
}

export default function Cars() {
  const navigate = useNavigate()
  const {data, isLoading} = useSWR<CarsResponse[]>(
    '?limit=8&model=brio&transmission=a',
  )

  return (
    <Container maxWidth="xl" sx={{minHeight: 'calc(100vh - 120px)', my: 4}}>
      <Box sx={{display: 'flex', justifyContent: 'space-between', mb: 3}}>
        <Box sx={{display: 'flex', gap: 2, alignItems: 'center'}}>
          <IconButton color="primary" onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h5">List of cars</Typography>
        </Box>
        <Box>this is filter</Box>
      </Box>
      <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
        {isLoading ? (
          //   <Loading />
          <>
            <Skeleton variant="rounded" sx={{width: 1 / 4}} height={300} />
            <Skeleton variant="rounded" sx={{width: 1 / 4}} height={300} />
            <Skeleton variant="rounded" sx={{width: 1 / 4}} height={300} />
            <Skeleton variant="rounded" sx={{width: 1 / 4}} height={300} />
          </>
        ) : (
          data?.map((res) => {
            const randomInt = Math.floor(Math.random() * 7)
            return (
              <Box sx={{width: 1 / 4}}>
                <Paper sx={{m: 1}}>
                  <img
                    src={galeryData[randomInt].img}
                    style={{width: '100%', height: 150, objectFit: 'cover'}}
                    alt={`${res.year}-${res.make}`}
                  />
                  <Box sx={{p: 2}}>
                    <Typography
                      sx={{fontSize: 14}}
                      color="text.secondary"
                      gutterBottom
                    >
                      {res.year}
                    </Typography>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{textTransform: 'capitalize'}}
                    >
                      {res.model}
                    </Typography>
                    <Typography
                      sx={{mb: 1, textTransform: 'capitalize'}}
                      color="text.secondary"
                    >
                      {res.make}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Typography variant="body2">
                        {Transmission[res.transmission]}, {res.cylinders}{' '}
                        Cylinder(s)
                      </Typography>
                      <Chip
                        label={res.class}
                        sx={{textTransform: 'capitalize'}}
                        color="primary"
                        size="small"
                      />
                    </Box>
                  </Box>
                </Paper>
              </Box>
            )
          })
        )}
      </Box>
    </Container>
  )
}
