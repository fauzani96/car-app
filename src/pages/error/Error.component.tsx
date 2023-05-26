import {Box, Button} from '@mui/material'
import {Link, useRouteError} from 'react-router-dom'

export default function ErrorPage() {
  const error: unknown = useRouteError()
  console.error(error)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
      id="error-page"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {(error as {statusText?: string})?.statusText ||
            (error as Error)?.message}
        </i>
      </p>
      <Button component={Link} to="" variant="outlined" color="secondary">
        Back to home
      </Button>
    </Box>
  )
}
