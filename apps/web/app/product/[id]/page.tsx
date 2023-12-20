import { ProductDetails } from '@aso/web-catalog-ui';
import { gql } from '../../../data-access/graphql-client';

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { findOneProduct: product } = await gql.GetProduct({
    where: { id: params.id },
  });

  return <ProductDetails product={product} />;
}
