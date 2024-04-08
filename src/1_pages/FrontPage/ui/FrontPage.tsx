// 'use client';

import Image from 'next/image';
import { Metadata } from 'next';
import classNames from 'classnames';
import { SectionTest } from '2_widgets/SectionTest';
import { SectionFrontTeam } from '2_widgets/SectionFrontTeam';
import { SectionFrontNews } from '2_widgets/SectionFrontNews';
import { SectionFrontGame } from '2_widgets/SectionFrontGame';
import { SectionSubscribe } from '2_widgets/SectionSubscribe';
import { SectionFrontIntro } from '2_widgets/SectionFrontIntro';
import { SectionFrontAbout } from '2_widgets/SectionFrontAbout';
import { Main } from '5_shared/ui/Main/Main';
import StoreProvider from '5_shared/state/StoreProvider';
import cls from './FrontPage.module.scss';
import {Header} from "2_widgets/Header";
import {Footer} from "2_widgets/Footer";
import { PrefetchKey } from '5_shared/state/prefetchData';

interface FrontPageProps {
    title: string;
}

const FrontPage = async (title: string) =>
// const { title } = props;

    (
        <StoreProvider slug={PrefetchKey.FRONT}>
            <Header />
            <Main className={classNames(cls.block)}>
                <SectionTest />
                { title || '...' }
                <SectionFrontIntro title="Интро-слайдер" />
                <SectionFrontAbout />
                <SectionFrontGame />
                <SectionFrontTeam />
                <SectionFrontNews />
                <SectionSubscribe />
                {/* <Image */}
                {/*    src="/vercel.svg" */}
                {/*    alt="Vercel Logo" */}
                {/*    className={cls.vercelLogo} */}
                {/*    width={100} */}
                {/*    height={24} */}
                {/*    priority */}
                {/* /> */}
            </Main>
            <Footer />
        </StoreProvider>
    );
export {
    FrontPage,
};
