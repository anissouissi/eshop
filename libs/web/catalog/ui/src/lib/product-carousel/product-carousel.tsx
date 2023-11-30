import Product from '../product/product';

export interface ProductCarouselProps {
  title: string;
  products: {
    id: string;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }[];
}

export function ProductCarousel({ title, products }: ProductCarouselProps) {
  return (
    <div className="shadow-lg rounded-lg">
      <div className="flex items-center pt-4 pl-4 gap-2">
        <svg
          className="h-6 w-18 fill-red-700"
          viewBox="0 0 100 73.72921228597585"
        >
          <g transform="translate(-12.034837688044338, -27.23673792557403) scale(1.2668250197941409)">
            <g xmlns="http://www.w3.org/2000/svg">
              <path d="M81.8,59.4c0.7-0.1,1.2-0.6,1.3-1.2l5.3-27.5c0.1-0.4,0-0.9-0.3-1.2C87.9,29.2,87.4,29,87,29H36.9l-2-6.4   c-0.2-0.6-0.8-1.1-1.4-1.1H23.2c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h9.2l2,6.4c0,0,0,0,0,0l8.8,28.3l0.7,2.1L39.5,69   c-0.3,0.5-0.3,1,0,1.5c0.3,0.5,0.8,0.7,1.3,0.7H45c-0.9,0.9-1.4,2.1-1.4,3.5c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5   c0-1.4-0.5-2.6-1.4-3.5h23.6c-0.9,0.9-1.4,2.1-1.4,3.5c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5c0-2.2-1.5-4.1-3.5-4.8c0-0.1,0-0.2,0-0.2   c0-0.8-0.7-1.5-1.5-1.5h-36l2.9-5.3L81.8,59.4z"></path>
              <path d="M11,32h18c0.8,0,1.5-0.7,1.5-1.5S29.9,29,29.1,29H11c-0.8,0-1.5,0.7-1.5,1.5S10.2,32,11,32z"></path>
              <path d="M18.5,41.2c0,0.8,0.7,1.5,1.5,1.5h10.4c0.8,0,1.5-0.7,1.5-1.5c0-0.8-0.7-1.5-1.5-1.5H20C19.2,39.7,18.5,40.4,18.5,41.2z"></path>
              <path d="M32.7,49.5H11c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5h21.7c0.8,0,1.5-0.7,1.5-1.5C34.2,50.1,33.5,49.5,32.7,49.5z"></path>
              <path d="M32.7,57.5H21.8c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5h10.8c0.8,0,1.5-0.7,1.5-1.5C34.2,58.2,33.5,57.5,32.7,57.5z   "></path>
            </g>
          </g>
        </svg>
        <h1 className=" text-red-700 font-bold italic">{title}</h1>
      </div>
      <div className="carousel carousel-center w-full p-4 space-x-20">
        {products.map((product) => (
          <div key={product.id} className="carousel-item">
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCarousel;
