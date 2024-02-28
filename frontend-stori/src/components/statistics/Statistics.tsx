'use client';
import { Backdrop, Box, Button, CircularProgress, Container, SxProps, Theme, Typography } from "@mui/material";
import { useStatistics } from "./useStatistics";

const containerStyle: SxProps<Theme> = {
  marginTop: 4,
  display: 'flex',
  justifyContent: 'center',
}

const statisticsModalStyle: SxProps<Theme> = { 
  alignItems: "center", 
  backgroundColor: "white", 
  borderColor: "#1976d2", 
  display: "flex", 
  flexDirection: "column",
  p: 5, 
}

const Statistics = () => {
  const {
    data,
    error, 
    loading, 
    showStatisticsModal,
    setShowStatisticsModal
  } = useStatistics()

  const handleOpen = () => {
    setShowStatisticsModal(true);
  }
  const handleClose = () => {
    setShowStatisticsModal(false);
  }

  return (
    <Container maxWidth="sm" sx={containerStyle}>
      {loading && <CircularProgress sx={{mx: "auto"}}/>}
      {error && <p>Ups, An unexpected error ocurred</p>}
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Show statistics
      </Button>
      {!loading && !error && showStatisticsModal &&
        <Backdrop
          sx={{ color: '#000', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={showStatisticsModal}
          onClick={handleClose}
        >
          <Box sx={statisticsModalStyle}>
            <Typography variant="h4" gutterBottom color={"#1976d2"}>
              These are your emails statistics
            </Typography>
            <Typography variant="body1" gutterBottom>
              Emails delivered:
            </Typography>
            <Typography variant="h4" gutterBottom>
              {data?.getStatistics.emailsDelivered}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Quantity of recipients:
            </Typography>
            <Typography variant="h4" gutterBottom>
              {data?.getStatistics.recipientsQuantity}
            </Typography>
          </Box>
        </Backdrop>
      }
    </Container>
  )
}

export default Statistics;