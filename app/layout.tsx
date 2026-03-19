import '../styles/globals.scss';
import styles from './layout.module.scss';
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
                <div className={styles.content}>
                    {children}
                </div>
            </body>
        </html>
    );
}
