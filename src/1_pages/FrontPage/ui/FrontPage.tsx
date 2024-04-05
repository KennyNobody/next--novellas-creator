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

interface FrontPageProps {
    title: string;
}

const FrontPage = async (title: string) => {
    // const { title } = props;

    return (
        <Main className={classNames(cls.block)}>
            { title || '...' }
            <SectionFrontIntro />
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
    );
};

export {
    FrontPage,
};
