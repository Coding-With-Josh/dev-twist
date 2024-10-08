import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { SupabaseAuthProvider } from '@/providers/SupabaseAuthProvider';
import { ThemeProvider } from 'next-themes';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Twist Developers',
  description: 'Just some random stuff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {' '}
        <body suppressHydrationWarning className={poppins.className}>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
