// frontend/src/app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import { AuthProvider } from '../contexts/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'PsyCare - Mental Health Support',
  description: 'Anonymous, AI-powered mental health support platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <AuthProvider>
          {/* Header Navigation */}
          <Header />
          
          {/* Main Content */}
          <main className="min-h-screen">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}