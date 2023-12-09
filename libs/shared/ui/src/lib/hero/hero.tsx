import { PropsWithChildren } from 'react';
import TechStack from '../tech-stack/tech-stack';

export interface HeroProps {
  avatarImageUrl: string;
}

export function Hero({
  avatarImageUrl,
  children: startShoppingButton,
}: PropsWithChildren<HeroProps>) {
  return (
    <div className="hero lg:h-[380px] h-[30rem] bg-base-200">
      <div className="hero-content flex-col lg:flex-row items-start">
        <div>
          <div className="avatar gap-5">
            <div className="w-24 mask mask-squircle">
              <img src={avatarImageUrl} alt="Anis" />
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold py-5">
              Hello there!
            </h1>
          </div>
          <p>
            eShop is a fictional e-commerce website that I developed to showcase
            and experiment technologies that I learned.
            <br />
            The list below include the frameworks and tools used.
          </p>
          <TechStack />
          <div className="flex gap-4 items-center">
            <p className="py-5">Enough talking, let's start shopping!</p>
            {startShoppingButton}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
