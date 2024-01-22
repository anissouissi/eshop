import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBasketItem as deleteBasketItemApi } from './apiBasket';
import toast from 'react-hot-toast';

export function useDeleteBasketItem() {
  const queryClient = useQueryClient();

  const { mutate: deleteBasketItem, isPending: isLoading } = useMutation({
    mutationFn: deleteBasketItemApi,
    onSuccess: (data) => {
      toast.success('Your basket has been successfully updated!');
      queryClient.setQueryData(['basket'], data);
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error(
        'An error occurred while updating your basket, please try again.'
      );
    },
  });

  return { deleteBasketItem, isLoading };
}
