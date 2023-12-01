import TechStack from '../tech-stack/tech-stack';

export interface HeroProps {
  avatarImageUrl: string;
}

export function Hero({ avatarImageUrl }: HeroProps) {
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
            <button className="btn">
              <svg
                className="h-6 w-18 fill-current"
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
              Start shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
