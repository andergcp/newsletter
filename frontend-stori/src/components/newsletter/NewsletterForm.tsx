'use client';
import {
  Alert,
  Box,
  Button,
  Chip,
  Container,
  IconButton,
  InputAdornment,
  Paper,
  SxProps,
  TextField,
  Theme,
  Tooltip,
  Typography,
} from '@mui/material'
import Add from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

import { useNewsletter } from './useNewsletter'
import Uploader from '../upload/Uploader';

const boxFormStyle: SxProps<Theme> = { p: 10, backgroundColor: "white" }

const NewsletterForm = () => {
  const {
    allowedExtensions,
    emailInputValue,
    emailList,
    fileList,
    formik,
    setEmailInputValue,
    setFileList,
    showSuccessAlert,
    handleAddEmailClick,
    handleEmailDelete,
  } = useNewsletter()

  return (
    <Container maxWidth="sm" sx={{ mt: 3 }}>
      <Paper component="form" sx={boxFormStyle} onSubmit={formik.handleSubmit}>
        <Typography variant="h5" gutterBottom color={"#1976d2"}>
          Create Newsletter
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Name"
            variant="outlined"
            required
            {...formik.getFieldProps('name')}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            label="Subject"
            variant="outlined"
            required
            {...formik.getFieldProps('subject')}
            error={formik.touched.subject && Boolean(formik.errors.subject)}
            helperText={formik.touched.subject && formik.errors.subject}
          />
          <TextField
            label="Email"
            variant="outlined"
            value={emailInputValue}
            onChange={(e) => setEmailInputValue(e.target.value)}
            InputProps={{
              endAdornment: <InputAdornment position="end">
                <Tooltip title="Add Email to list">
                  <IconButton
                    aria-label="add email"
                    onClick={handleAddEmailClick}
                    edge="end"
                  >
                    <Add />
                  </IconButton>
                </Tooltip>
              </InputAdornment>,
            }}
            error={Boolean(formik.errors.recipientsEmails)}
            helperText={formik.errors.recipientsEmails}
          />
          {emailList.map((email, index) => (
            <Chip
              key={index}
              label={email}
              onDelete={() => handleEmailDelete(email)}
              deleteIcon={
                <Tooltip title="Remove email from list">
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              }
            />
          ))}
          <Uploader
            id="file"
            allowedExtensions={allowedExtensions}
            onUploadFile={(response) => formik.setFieldValue('fileUrl', response.fileUrl)}
            fileList={fileList}
            setFileList={setFileList}
          />
          <Button
            type="submit"
            variant='contained'
            sx={{ width: "50%", mx: "auto" }}
            disabled={!formik.isValid}
          >
            Submit
          </Button>
        </Box>
      </Paper>
      {showSuccessAlert &&
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          Newsletter created successfully!
        </Alert>
      }
    </Container>
  )
}

export default NewsletterForm
