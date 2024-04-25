import classNames from 'classnames';
import {
    Section,
    SectionTagType,
    SectionThemeMode,
    SectionDecorType,
} from '5_shared/ui/Section/Section';
import { Container } from '5_shared/ui/Container/Container';
import cls from './SectionShopSlider.module.scss';

interface SectionShopSliderProps {
    className?: string
}

export const SectionShopSlider = (props: SectionShopSliderProps) => {
    const { className } = props;

    return (
        <Section
            theme={SectionThemeMode.DARK}
            tag={SectionTagType.SECTION}
            decor={SectionDecorType.BOTTOM}
            className={
                classNames(cls.block, className)
            }
        >
            <Container>
                СЛАЙДЕР С ПРЕВЬЮШКАМИ
            </Container>
        </Section>
    );
};
