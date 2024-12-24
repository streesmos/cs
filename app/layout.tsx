import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { MobileHeader } from '@/components/shared/headerMobile';

const roboto = Roboto({
  subsets: ['cyrillic'],
  variable: '--font-roboto',
  weight: ['100','300','400', '500', '700',  '900'],
});

export const metadata: Metadata = {
  title: 'ЦСТБИ',
  description: 'Компания «Центр современных технологий безопасности информации» (ЦСТБИ) создана для оказания услуг в области технической и информационной безопасности',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <Header/>
        <MobileHeader/>
       <main className='min-h-screen'>{children}</main>
       <Footer/>
      </body>
    </html>
  );
}
