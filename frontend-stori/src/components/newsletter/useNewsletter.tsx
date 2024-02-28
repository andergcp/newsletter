'use client';
import { useMutation, useQuery } from '@apollo/client';
import { FormikHelpers, useFormik } from 'formik';
import * as yup from 'yup';
import { CreateNewsletterInput, Mutation, MutationCreateNewsletterArgs } from '@/graphql/__generated__/graphql';
import { gql } from '@/graphql/__generated__/gql';
import { useState } from 'react';
import { UploadFile } from 'antd/es/upload';

// Consts
const ALLOWED_EXTENSIONS = ['.pdf', 'image/png'];

// GraphQL
const CREATE_NEWSLETTER = gql(`
  mutation CreateNewsletter($input:CreateNewsletterInput!) {
    createNewsletter(createNewsletterInput: $input) {
      name
      fileUrl
      recipientsEmails
    }
  }
`)

const FIND_NEWSLETTERS = gql(`
  query FindNewsletters {
    findNewsletters {
      id
      fileUrl
      name
      recipientsEmails
      subject
      sendAt
      status
      __typename
    }
  }
`)

// Create form validation schema
const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  subject: yup.string().required('Subject is required'),
  fileUrl: yup.string().required('File URL is required'),
  recipientsEmails: yup.array().of(yup.string().email('Invalid email')).required('Recipients emails are required'),
});

export function useNewsletter() {
  const [createNewsletter] = useMutation(CREATE_NEWSLETTER);
  const { loading, error, data, refetch } = useQuery(FIND_NEWSLETTERS);

  const [emailInputValue, setEmailInputValue] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      subject: '',
      fileUrl: '',
      recipientsEmails: [],
    },
    validationSchema,
    onSubmit: async (values: CreateNewsletterInput, formikHelpers: FormikHelpers<CreateNewsletterInput>) => {
      
      try {
        // validationSchema.validateSync(values);
        await createNewsletter({ variables: {
          input: {
            name: values.name,
            subject: values.subject,
            fileUrl: values.fileUrl,
            recipientsEmails: values.recipientsEmails,
          }
        }});
        refetch();
        setEmailList([]);
        setFileList([]);
        formikHelpers.resetForm();
        setShowSuccessAlert(true);
        setTimeout(() => {
          setShowSuccessAlert(false);
        }, 3000);
      } catch (error) {
        console.error(error);
      }
    }
  });
  const [emailList, setEmailList] = useState<string[]>(formik.values.recipientsEmails || []);

  const handleAddEmailClick = () => {
    if (emailInputValue) {
      setEmailList([...emailList, emailInputValue]);
      formik.setFieldValue('recipientsEmails', [...emailList, emailInputValue]);
      setEmailInputValue('');
    }
  };

  const handleEmailDelete = (emailToDelete: string) => {
    const newEmailList = emailList.filter(email => email !== emailToDelete);
    setEmailList(newEmailList);
    formik.setFieldValue('recipientsEmails', newEmailList);
  };

  return {
    allowedExtensions: ALLOWED_EXTENSIONS,
    data, 
    emailInputValue, 
    emailList, 
    error, 
    fileList, 
    formik, 
    loading, 
    showSuccessAlert,
    handleAddEmailClick, 
    handleEmailDelete, 
    refetch,
    setEmailInputValue,
    setFileList,
  };
}

