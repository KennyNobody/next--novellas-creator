import classNames from 'classnames';
import { SliderGamesIntro } from '3_features/SliderGamesIntro';
import {
    Section,
    SectionTagType,
} from '5_shared/ui/Section/Section';
import cls from './SectionFrontIntro.module.scss';

interface SectionFrontIntroProps {
    className?: string;
}

export const SectionFrontIntro = (props: SectionFrontIntroProps) => {
    const {
        className,
    } = props;

    return (
        <Section
            tag={SectionTagType.SECTION}
            className={classNames(cls.block, className)}
        >
            <SliderGamesIntro />
        </Section>
    );
};
