'use client';

import { gql } from "@/graphql/__generated__/gql";
import { useMutation, useQuery } from "@apollo/client";
import { FormikHelpers, useFormik } from "formik";
import { useState } from "react";

// GraphQL
const UNSUBSCRIBE_MANY = gql(`
  mutation UnsubscribeMany($input:UnsubscribeManyInput!){
  unsubscribeMany(unsubscribeManyInput:$input)
}
`)

const FIND_SUBSCRIPTIONS = gql(`
query FindSubscriptionsByEmail($email:String!){
  findSubscriptionsByEmail(email: $email){
    id
    newsletter {
      name
    }
    status
  }
}
`)


export function useUnsubscribe(email: string) {
  const [unsubscribeMany] = useMutation(UNSUBSCRIBE_MANY);
  const { loading, error, data, refetch } = useQuery(FIND_SUBSCRIPTIONS, { variables: { email } });
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const formik = useFormik({
    initialValues: {
      subscriptionIds: [],
    },
    onSubmit: async (values, { setSubmitting }: FormikHelpers<any>) => {
      try {
        await unsubscribeMany({ variables: { input: { subscriptionIds: values.subscriptionIds } } })
        refetch()
        setShowSuccessAlert(true)
        setTimeout(() => setShowSuccessAlert(false), 3000)
      } catch (error) {
        console.error(error)
      }
      setSubmitting(false)
    }
  })

  return {
    error,
    formik,
    loading,
    showSuccessAlert,
    subscriptions: data,
    setShowSuccessAlert,
  };
}