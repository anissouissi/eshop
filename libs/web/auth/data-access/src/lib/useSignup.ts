import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signUp as signUpApi } from './apiAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function useSignUp() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: signUp, isPending: isLoading } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (user) => {
      toast.success('Account successfully created!');
      queryClient.setQueryData(['user'], user);
      navigate('/', { replace: true });
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error(err.message);
    },
  });

  return { signUp, isLoading };
}
