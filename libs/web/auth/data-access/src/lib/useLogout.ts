import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutApi } from './apiIdentity';
import { useNavigate } from 'react-router-dom';

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ['user'], exact: true });
      navigate('/', { replace: true });
    },
  });

  return { logout, isLoading };
}
