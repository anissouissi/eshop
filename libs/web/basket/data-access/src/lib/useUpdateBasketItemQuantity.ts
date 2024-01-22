import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateBasketItemQuantity as updateBasketItemQuantityApi } from './apiBasket';
import toast from 'react-hot-toast';

export function useUpdateBasketItemQuantity() {
  const queryClient = useQueryClient();

  const { mutate: updateBasketItemQuantity, isPending: isLoading } =
    useMutation({
      mutationFn: updateBasketItemQuantityApi,
      onSuccess: (data) => {
        toast.success('Your basket has been successfully updated!');
        // todo should only keep line 15
        queryClient.invalidateQueries({ queryKey: ['basket'] });
        queryClient.setQueryData(['basket'], data);
      },
      onError: (err) => {
        console.log('ERROR', err);
        toast.error(
          'An error occurred while updating your basket, please try again.'
        );
      },
    });

  return { updateBasketItemQuantity, isLoading };
}
