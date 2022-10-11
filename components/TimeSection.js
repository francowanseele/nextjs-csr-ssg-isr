import { format } from 'date-fns';

import useRealTime from 'hooks/useRealTime';
import Footer from './Footer';

import ButtonLink from './links/ButtonLink';
import CustomLink from './links/CustomLink';

export default function TimeSection({ dateTime, title, description }) {
  const cleanDate = dateTime && format(new Date(dateTime), "kk:mm:ss O");

  const realTime = useRealTime();

  return (
    <section className="bg-dark">
      <div className="flex flex-col items-center justify-center min-h-screen text-center text-white layout">
        <h1>{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <h2 className="mt-8 text-5xl md:text-6xl text-primary-400">
          {cleanDate ? cleanDate : "LOADING..."}
        </h2>
        <ButtonLink className="mt-8" href="/">
          Back to Home
        </ButtonLink>

        <Footer />
      </div>

      <div className="absolute text-sm font-medium text-right right-4 bottom-8 sm:bottom-4">
        <p className="text-white">Real Time:</p>
        <p className="text-primary-400">{realTime}</p>
      </div>
    </section>
  );
}
