import { gql } from "@/graphql/__generated__/gql";
import { useQuery } from "@apollo/client";
import { useState } from "react";

const GET_STATISTICS = gql(`
  query GetStatistics {
    getStatistics{
    emailsDelivered
    recipientsQuantity
    __typename
  }
  }
`)

export function useStatistics() {
  const [showStatisticsModal, setShowStatisticsModal] = useState(false);
  const { loading, error, data } = useQuery(GET_STATISTICS);

  return {
    data,
    error, 
    loading, 
    showStatisticsModal,
    setShowStatisticsModal
  };
}