import './globals.css';
import { poppins, ptSans } from '../fonts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${poppins.variable} ${ptSans.variable}`}>
      <body className="bg-gray-900 text-white">
        {children}
      </body>
    </html>
  );
}
