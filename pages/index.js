import Head from 'next/head'

import useRealTime from 'hooks/useRealTime';
import CustomLink from 'components/links/CustomLink';
import Footer from 'components/Footer';
import Seo from 'components/Seo';

export default function Home() {
  const realTime = useRealTime();

  return (
    <>
      <Seo title='Home' />

      <main>
        <section className='bg-dark w-full'>
          <div className='flex flex-col items-center justify-center min-h-screen text-center text-white layout'>
            <h1 className='text-2xl md:text-4xl'>
              Types of Next Rendering 
            </h1>
            <p className='mt-2 text-sm text-gray-300'>
              Demo of Next.js rendering type using time API.
            </p>

            <div className='flex flex-col items-center mt-4 space-y-2'>
              <CustomLink href='/render/csr'>CSR</CustomLink>
              <CustomLink href='/render/ssr'>SSR</CustomLink>
              <CustomLink href='/render/ssg'>SSG</CustomLink>
              <CustomLink href='/render/isr'>ISR</CustomLink>
              <CustomLink href='/render/isr-20'>ISR 20s</CustomLink>
            </div>

            <Footer />
          </div>
          <div className="absolute text-sm font-medium text-right right-4 bottom-8 sm:bottom-4">
            <p className="text-white">Real Time:</p>
            <p className="text-primary-400">{realTime}</p>
          </div>
        </section>
      </main>
    </>
  );
}
