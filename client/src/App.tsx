import {Box, Container, Typography} from "@mui/material";
import {Outlet} from "react-router-dom";
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
              <Typography variant="h1" sx={{fontSize: 30}}>Barbershop</Typography>
          </Box>
          <Outlet/>
      </Container>
  )
}

export default App
