import '../styles/globals.scss';
import { Navigation } from '@/app/_components/navigation/Navigation';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang={'en'}>
            <body>
                <Navigation />
                {children}
            </body>
        </html>
    );
}
