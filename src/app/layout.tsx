import { ReactNode } from 'react';
import { Header } from '2_widgets/Header';
import { Footer } from '2_widgets/Footer';
import { Body } from '5_shared/ui/Body/Body';
import './globals.scss';
import StoreProvider from '../5_shared/state/StoreProvider';

// const inter = Inter({ subsets: ['latin'] });

interface LayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="ru">
            <StoreProvider>
                <Body>
                    {children}
                </Body>
            </StoreProvider>
        </html>
    );
}
