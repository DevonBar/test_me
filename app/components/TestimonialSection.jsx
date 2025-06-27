'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

const TestimonialSection = () => {
  useEffect(() => {
    new Splide('#image-carousel', {
      type: 'loop',
      perPage: 3,
      gap: '1rem',
      autoplay: true,
      interval: 3000,
      pauseOnHover: true,
      breakpoints: {
        768: {
          perPage: 1,
        },
        1024: {
          perPage: 2,
        },
      },
    }).mount();
  }, []);

  return (
    <section className="mt-10 px-4">
      <h1 className="text-[#00479e] text-2xl text-center font-semibold mb-6">
        OUR STORY IS THE STORY OF YOUR SUCCESSFUL MARRIAGE
      </h1>

      <section
        id="image-carousel"
        className="splide max-w-5xl mx-auto"
        aria-label="Beautiful Images"
      >
        <div className="splide__track">
          <ul className="splide__list">
            {[1, 2, 3].map((i) => (
              <li key={i} className="splide__slide flex justify-center">
                <Image
                  src="/FB_IMG_1750943141457.jpg"
                  alt={`image0${i}`}
                  height={300}
                  width={300}
                  className="object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
};

export default TestimonialSection;
