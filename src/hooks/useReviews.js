import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getReviews } from '../services/apiReview';

export default function useReviews() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['reviews'],
    queryFn: getReviews,
  });
  return { isLoading, data, error };
}
