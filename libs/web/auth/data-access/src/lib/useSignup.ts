import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signUp as signUpApi } from './apiIdentity';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function useSignUp() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const redirectTo = searchParams.get('redirectTo') || '/';

  const { mutate: signUp, isPending: isLoading } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (user) => {
      toast.success('Account successfully created!');
      queryClient.setQueryData(['user'], user);
      if (redirectTo && redirectTo !== '/') {
        navigate(redirectTo, { replace: true });
      } else {
        navigate(-1);
      }
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error(err.message);
    },
  });

  return { signUp, isLoading };
}
