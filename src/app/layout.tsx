import { ReactNode } from 'react';
import { Body } from '5_shared/ui/Body/Body';
import StoreProvider from '5_shared/state/StoreProvider';
import './globals.scss';
import { HelveticaNowDisplay } from './fonts';

interface LayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="ru">
            <StoreProvider>
                <Body className={HelveticaNowDisplay.className}>
                    {children}
                </Body>
            </StoreProvider>
        </html>
    );
}
