import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addToBasket as addToBasketApi } from './apiBasket';
import toast from 'react-hot-toast';

export function useAddToBasket() {
  const queryClient = useQueryClient();

  const { mutate: addToBasket, isPending: isLoading } = useMutation({
    mutationFn: addToBasketApi,
    onSuccess: () => {
      toast.success('Your product has been successfully added to your basket!');
      queryClient.invalidateQueries({ queryKey: ['basket'] });
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error(
        'An error occurred while adding your product to your basket, please try again.'
      );
    },
  });

  return { addToBasket, isLoading };
}
