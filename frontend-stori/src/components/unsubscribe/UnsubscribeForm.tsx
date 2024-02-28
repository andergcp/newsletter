'use client';
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { SxProps, Theme } from "@mui/material/styles";
import { useSearchParams } from "next/navigation";
import { useUnsubscribe } from "./useUnsubscribe";
import { Alert, Box, Button, Checkbox } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

const boxFormStyle: SxProps<Theme> = {p: 10, backgroundColor: "white"}
const UnsubscribeForm = () => {
  const searchParams = useSearchParams()
  const email = searchParams.get('email') || ''
  const { 
    error, 
    formik, 
    loading, 
    showSuccessAlert,
    subscriptions,
  } = useUnsubscribe(email)

  return (
    <Container maxWidth="sm" sx={{mt: 3}}>
      <Paper component="form" sx={boxFormStyle} onSubmit={formik.handleSubmit}>
        <Typography variant="h5" gutterBottom>
          We are sorry to see you go
        </Typography>
        <Typography variant="body1" gutterBottom>
          Please select the newsletters you want to unsubscribe from
        </Typography>
        {subscriptions?.findSubscriptionsByEmail.
          filter((sub: any) => sub.status === "SUBSCRIBED").
          map((subscription: any) => (
            <Box key={subscription.id}>
              <Checkbox
                id={subscription.id}
                name="subscriptionIds"
                value={subscription.id}
                onChange={formik.handleChange}
                checked={formik.values.subscriptionIds.includes(subscription.id)}
              />
              <label htmlFor={subscription.id}>{subscription.newsletter.name}</label>
            </Box>
        ))}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button type="submit" variant="contained" color="primary" disabled={loading}>
            Unsubscribe
          </Button>
        </Box>
      </Paper>
      {showSuccessAlert && 
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          Successfully unsubscribed. We will miss you!
        </Alert>
      }
    </Container>
  )
}

export default UnsubscribeForm;