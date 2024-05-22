import Image from 'next/image';
import classNames from 'classnames';
import { TeamTabs } from '3_features/TeamTabs';
import {
    Title,
    TitleMode,
} from '5_shared/ui/Title/Title';
import {
    Section,
    SectionThemeMode,
} from '5_shared/ui/Section/Section';
import ImageBg from '5_shared/assets/backgrounds/bg-blur-1.png';
import Image1 from '5_shared/assets/images/cloud-1.png';
import Image2 from '5_shared/assets/images/cloud-2.png';
import Image3 from '5_shared/assets/images/cloud-3.png';
import { Container } from '5_shared/ui/Container/Container';
import cls from './SectionTeam.module.scss';
import { SectionTeamType } from '../model/types/SectionTeam';

interface SectionTeamProps {
    className?: string;
    data: SectionTeamType;
}

export const SectionTeam = (props: SectionTeamProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <Section
            theme={SectionThemeMode.DARK}
            className={classNames(cls.block, className)}
        >
            <picture className={classNames(cls['bg-picture'])}>
                <Image
                    width={1920}
                    height={900}
                    src={ImageBg}
                    alt="Фоновое изображение"
                    className={classNames(cls['bg-image'])}
                />
            </picture>
            <Image
                width={1288}
                height={619}
                src={Image1}
                alt="Декоративное изображение"
                className={classNames(cls['image-1'])}
            />
            <Image
                width={425}
                height={276}
                src={Image2}
                alt="Декоративное изображение"
                className={classNames(cls['image-2'])}
            />
            <Image
                width={935}
                height={376}
                src={Image3}
                alt="Декоративное изображение"
                className={classNames(cls['image-3'])}
            />
            <Container>
                {
                    data?.title
                    && (
                        <Title
                            tag="h2"
                            text={data.title}
                            mode={TitleMode.MARKUP}
                            className={classNames(cls.title)}
                        />
                    )
                }
            </Container>
            <TeamTabs
                className={classNames(cls.tabs)}
            />
        </Section>
    );
};
