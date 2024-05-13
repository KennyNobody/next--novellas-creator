import localFont from 'next/font/local';
import { NextFont } from 'next/dist/compiled/@next/font';

const HelveticaNowDisplay: NextFont = localFont({
    variable: '--font-regular',
    src: [
        {
            path: './../5_shared/assets/fonts/HelveticaNowDisplay-Thin.woff2',
            weight: '100',
            style: 'normal',
        },
        {
            path: './../5_shared/assets/fonts/HelveticaNowDisplay-ThinIta.woff2',
            weight: '100',
            style: 'italic',
        },
        {
            path: './../5_shared/assets/fonts/HelveticaNowDisplay-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: './../5_shared/assets/fonts/HelveticaNowDisplay-LightIta.woff2',
            weight: '300',
            style: 'italic',
        },
        {
            path: './../5_shared/assets/fonts/HelveticaNowDisplay-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './../5_shared/assets/fonts/HelveticaNowDisplay-RegIta.woff2',
            weight: '400',
            style: 'italic',
        },
        {
            path: './../5_shared/assets/fonts/HelveticaNowDisplay-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: './../5_shared/assets/fonts/HelveticaNowDisplay-MedIta.woff2',
            weight: '500',
            style: 'italic',
        },
        {
            path: './../5_shared/assets/fonts/HelveticaNowDisplay-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: './../5_shared/assets/fonts/HelveticaNowDisplay-BoldIta.woff2',
            weight: '700',
            style: 'italic',
        },
        {
            path: './../5_shared/assets/fonts/HelveticaNowDisplay-ExtraBold.woff2',
            weight: '800',
            style: 'normal',
        },
        {
            path: './../5_shared/assets/fonts/HelveticaNowDisplay-ExtBdIta.woff2',
            weight: '800',
            style: 'italic',
        },
        {
            path: './../5_shared/assets/fonts/HelveticaNowDisplay-Black.woff2',
            weight: '900',
            style: 'normal',
        },
        {
            path: './../5_shared/assets/fonts/HelveticaNowDisplay-BlackIta.woff2',
            weight: '900',
            style: 'italic',
        },
    ],
});

export {
    HelveticaNowDisplay,
};
