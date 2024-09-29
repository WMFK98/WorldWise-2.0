import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createReview } from '../services/apiReview';

export default function useSerchAddress() {
  const queryClient = useQueryClient();
  const { data, isLoading, mutate, error } = useMutation({
    queryKey: ['createReview'],
    mutationFn: createReview,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['reviews'] }),
  });
  return { isLoading, data, error, createReview: mutate };
}
