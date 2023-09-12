import NavBar from '@/Components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/Components/Footer';
import { Suspense } from 'react';
import Loading from './Loading';

export const metadata: Metadata = {
    title: 'Car Hub',
    description: 'Next generation car rental service',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="relative">
                <Suspense fallback={<Loading />}>
                    <NavBar />
                    {children}
                    <Footer />
                </Suspense>
            </body>
        </html>
    );
}
