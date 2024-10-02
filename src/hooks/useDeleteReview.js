import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createReview, deleteReview } from '../services/apiReview';

export default function useSerchAddress() {
  const queryClient = useQueryClient();
  const { isLoading, mutate, error } = useMutation({
    queryKey: ['deleteReview'],
    mutationFn: deleteReview,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['reviews'] }),
  });
  return { isLoading, error, deleteReview: mutate };
}
