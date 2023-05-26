import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import {
  Box,
  Chip,
  Container,
  IconButton,
  MenuItem,
  Paper,
  Skeleton,
  TextField,
  Typography,
} from '@mui/material'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import useSWR from 'swr'
import {galeryData} from '../../constants/Galery.constant'

interface CarsResponse {
  city_mpg: number
  class: string
  combination_mpg: number
  cylinders: number
  displacement: number
  drive: string
  fuel_type: keyof typeof FuelType
  highway_mpg: number
  make: string
  model: string
  transmission: keyof typeof Transmission
  year: number
}

enum Transmission {
  a = 'AT',
  m = 'MT',
}

enum FuelType {
  gas = 'success',
  diesel = 'error',
  electricity = 'primary',
}

export default function Cars() {
  const navigate = useNavigate()
  const [limit] = useState<number>(50)
  const [make, setMake] = useState<string>('')
  const [model, setModel] = useState<string>('')
  const [fuel, setFuel] = useState<string>('gas')
  const [trans, setTrans] = useState<string>('')
  const {data, isLoading} = useSWR<CarsResponse[]>(
    `?limit=${limit}&make=${make}&model=${model}&transmission=${trans}&fuel_type=${fuel}`,
  )

  console.log({FuelType})

  return (
    <Container maxWidth="xl" sx={{minHeight: 'calc(100vh - 120px)', my: 4}}>
      <Box sx={{display: 'flex', justifyContent: 'space-between', mb: 3}}>
        <Box sx={{display: 'flex', gap: 2, alignItems: 'center'}}>
          <IconButton color="primary" onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h5">List of cars</Typography>
        </Box>
        <Box sx={{display: 'flex', gap: 1}}>
          <TextField
            sx={{width: 150}}
            size="small"
            placeholder="Make (e.g. audi)."
            value={make}
            onChange={(e) => setMake(e.target.value)}
          />
          <TextField
            sx={{width: 150}}
            size="small"
            placeholder="Model (e.g. a4)."
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />

          <TextField
            label="Fuel Type"
            select
            sx={{width: 150}}
            size="small"
            value={fuel}
            onChange={(e) => setFuel(e.target.value)}
          >
            <MenuItem value="">All fuel</MenuItem>
            <MenuItem value="gas">Gas</MenuItem>
            <MenuItem value="diesel">Diesel</MenuItem>
            <MenuItem value="electricity">Electricity</MenuItem>
          </TextField>
          <TextField
            label="Transmission"
            select
            sx={{width: 150}}
            size="small"
            value={trans}
            onChange={(e) => setTrans(e.target.value)}
          >
            <MenuItem value="">All transmission</MenuItem>
            <MenuItem value="a">Automatic</MenuItem>
            <MenuItem value="m">Manual</MenuItem>
          </TextField>
        </Box>
      </Box>
      <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
        {isLoading
          ? Array.from(new Array(8)).map((res, i) => (
              <Box sx={{width: 1 / 4}}>
                <Skeleton
                  variant="rounded"
                  sx={{margin: 1}}
                  height={300}
                  key={i}
                />
              </Box>
            ))
          : data?.map((res) => {
              const randomInt = Math.floor(Math.random() * 7)
              return (
                <Box sx={{width: 1 / 4}}>
                  <Paper sx={{m: 1}}>
                    <img
                      src={`${galeryData[randomInt].img}?w=248&fit=crop&auto=format`}
                      style={{
                        width: '100%',
                        height: 150,
                        objectFit: 'cover',
                      }}
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
                          {Transmission[res.transmission]}, {res.class}
                        </Typography>
                        <Chip
                          label={res.fuel_type}
                          sx={{textTransform: 'capitalize'}}
                          color={FuelType[res.fuel_type]}
                          size="small"
                        />
                      </Box>
                    </Box>
                  </Paper>
                </Box>
              )
            })}
      </Box>
    </Container>
  )
}
