import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export default function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: (auth) => loginApi(auth),

    onSuccess: (user) => queryClient.setQueriesData(['user'], user.user),
    onError: (err) => {
      console.log('ERROR', err);
    },
  });
  return { login, isLoading };
}
