'use client';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useNewsletter } from "./useNewsletter";

import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";
import { CircularProgress, SxProps, Theme } from "@mui/material";

const containerStyle: SxProps<Theme> = {
  marginTop: 4,
}

const newsletterNameStyle: SxProps<Theme> = {
  color: 'chocolate',
}

const NewsLetterList = () => {
  const {loading, error, data} = useNewsletter()
  return (
    <Container maxWidth="sm" sx={containerStyle}>
      {loading && <CircularProgress sx={{mx: "auto"}}/>}
      {error && <p>Ups, An unexpected error ocurred</p>}
      {!loading && !error &&
        <Box sx={{ p: 2 }}>
          <Typography variant="h5" gutterBottom color={"#1976d2"}>
            Your Newsletters
          </Typography>
          {data && data.findNewsletters.map((newsletter: any) => (
            <Paper key={newsletter.id} sx={{px: 2, py: 2, my: 2}}>
              {newsletter.name && 
                <>
                  <Typography variant="body2" gutterBottom sx={newsletterNameStyle}>
                    Name:
                  </Typography>
                  <Typography variant="body1" gutterBottom sx={newsletterNameStyle}>
                    {newsletter.name}
                  </Typography>
                </>
              }
              {newsletter.sendAt && 
                <Typography variant="body2" gutterBottom>
                  Delivery date: {newsletter.sendAt}
                </Typography>
              }
              <Typography variant="body2" gutterBottom>
                {newsletter.status}
              </Typography>
            </Paper>
          ))}
        </Box>
      }
    </Container>
  )
}

export default NewsLetterList;