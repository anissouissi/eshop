import { useMutation } from '@tanstack/react-query';
import { placeOrder as placeOrderApi } from './apiCheckout';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function usePlaceOrder() {
  const navigate = useNavigate();

  const { mutate: placeOrder, isPending: isLoading } = useMutation({
    mutationFn: placeOrderApi,
    onSuccess: () => {
      toast.success('Your order has been placed successfully!');
      navigate('/order-thank-you', { replace: true });
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error(err.message);
    },
  });

  return { placeOrder, isLoading };
}
