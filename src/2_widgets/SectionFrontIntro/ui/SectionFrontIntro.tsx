import classNames from 'classnames';
import { SliderPostIntro } from '3_features/SliderPostIntro';
import { Section } from '5_shared/ui/Section/Section';
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
            className={classNames(cls.block, className)}
        >
            <SliderPostIntro />
        </Section>
    );
};
