import classNames from 'classnames';
import { SliderGamesFull } from '3_features/SliderGamesFull';
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
            <SliderGamesFull />
        </Section>
    );
};
