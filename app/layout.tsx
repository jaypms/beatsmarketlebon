import './globals.css';
import { Poppins, PT_Sans } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-poppins' });
const ptSans = PT_Sans({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-pt-sans' });

export const metadata = {
  title: 'BeatsMarket',
  description: 'Marketplace pro pour beatmakers et artistes',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${poppins.variable} ${ptSans.variable}`}>
      <body className="bg-background text-text font-poppins">
        {children}
      </body>
    </html>
  );
}
