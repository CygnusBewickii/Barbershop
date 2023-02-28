import {Box, Container, Typography} from "@mui/material";
import {Link, Outlet} from "react-router-dom";
function App() {


  return (
      <Container maxWidth='sm'>
          <Box
              sx={{
                  width: 1,
                  height: 60,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  bgcolor: 'white',
                  borderRadius: 4,
                  marginY: 1.75,
              }}
          >
              <Link to='/' style={{textDecoration: 'none', color: 'black'}}>
                  <Typography variant="h1" sx={{fontSize: 30}}>Barbershop</Typography>
              </Link>
          </Box>
          <Outlet/>
      </Container>
  )
}

export default App
