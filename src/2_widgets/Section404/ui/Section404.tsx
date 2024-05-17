import classNames from 'classnames';
import Image from '5_shared/assets/images/none.svg';
import { Container } from '5_shared/ui/Container/Container';
import { RoutesList, RouteSlug } from '5_shared/config/routes';
import { Section, SectionThemeMode } from '5_shared/ui/Section/Section';
import { ButtonRegular, ButtonTagType } from '5_shared/ui/ButtonRegular';
import cls from './Section404.module.scss';

interface Section404Props {
    className?: string;
}

export const Section404 = (props: Section404Props) => {
    const { className } = props;

    return (
        <Section
            theme={SectionThemeMode.LiGHT}
            className={classNames(cls.block, className)}
        >
            <Container>
                <h1 className={classNames(cls.title)}>
                    Вашу страницу еще не придумали
                </h1>
                <Image
                    className={classNames(cls.img)}
                />
                <ButtonRegular
                    label="На главную"
                    tag={ButtonTagType.LINK}
                    className={classNames(cls.button)}
                    path={RoutesList[RouteSlug.FRONT].url}
                />
            </Container>
        </Section>
    );
};
