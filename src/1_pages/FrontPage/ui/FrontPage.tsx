// 'use client';

import Image from 'next/image';
import { Metadata } from 'next';
import classNames from 'classnames';
import { SectionFrontTeam } from '2_widgets/SectionFrontTeam';
import { SectionFrontNews } from '2_widgets/SectionFrontNews';
import { SectionFrontGame } from '2_widgets/SectionFrontGame';
import { SectionSubscribe } from '2_widgets/SectionSubscribe';
import { SectionFrontIntro } from '2_widgets/SectionFrontIntro';
import { SectionFrontAbout } from '2_widgets/SectionFrontAbout';
import { Main } from '5_shared/ui/Main/Main';
import cls from './FrontPage.module.scss';
import { FrontPageType } from '../model/types/FrontPage';

interface FrontPageProps {
    data: FrontPageType;
}

const FrontPage = async (props: FrontPageProps) => {
    const { data } = props;

    return (
        <Main className={classNames(cls.block)}>
            <SectionFrontIntro title="Интро-слайдер" />
            <SectionFrontAbout data={data['section-about']} />
            <SectionFrontGame data={data['section-game']} />
            <SectionFrontTeam data={data['section-team']}/>
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
    );
};
export {
    FrontPage,
};
