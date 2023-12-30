'use client';

import { formatCurrency, getDiscountedPrice } from '@aso/shared-util';
import Availability from '../availability/availability';
import Price from '../price/price';
import Rating from '../rating/rating';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import Discount from '../discount/discount';
import AddToBasketButton from '../add-to-basket-button/add-to-basket-button';
import { Product } from '@aso/data-access-graphql';

export interface ProductDetailsProps {
  product?: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    product && (
      <div className="flex flex-col gap-10 p-7 w-full md:min-h-[calc(100vh-132px)] items-center">
        <div className="text-left w-full lg:w-[80%]">
          <h2>{product.brand}</h2>
          <h1 className="font-bold h-10">{product.title}</h1>
        </div>
        <div className="grid grid-cols-4 w-full lg:w-[80%]">
          <div className="col-span-4 md:col-span-2 p-3 gap-3">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className="w-full h-80"
            >
              {product.images?.map((image, i) => (
                <SwiperSlide key={`product-image-${i}`}>
                  <div className="flex justify-center items-center">
                    <img className="h-72" src={image} alt="product" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-span-4 md:col-span-2 p-3 gap-3">
            <Discount discountPercentage={product.discountPercentage} />
            <div>{product.description}</div>
            <div className="badge badge-outline">{product.category}</div>
            <div className="card-actions justify-between items-center">
              <Rating rating={product.rating} />
              <Price
                price={formatCurrency(product.price)}
                discountedPrice={getDiscountedPrice(
                  product.price,
                  product.discountPercentage
                )}
              />
            </div>
            <div className="flex justify-between items-center">
              <Availability stock={product.stock} />
              <AddToBasketButton productId={product.id} />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ProductDetails;
