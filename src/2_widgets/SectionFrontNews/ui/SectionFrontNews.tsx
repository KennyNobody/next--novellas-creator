import classNames from 'classnames';
import { ListPost } from '3_features/ListPost';
import { Section } from '5_shared/ui/Section/Section';
import { Container } from '5_shared/ui/Container/Container';
import cls from './SectionFrontNews.module.scss';

interface SectionFrontIntroProps {
    className?: string;
}

export const SectionFrontNews = (props: SectionFrontIntroProps) => {
    const { className } = props;

    return (
        <Section className={classNames(cls.block, className)}>
            <Container>
                Новости
                <ListPost />
            </Container>
        </Section>
    );
};
