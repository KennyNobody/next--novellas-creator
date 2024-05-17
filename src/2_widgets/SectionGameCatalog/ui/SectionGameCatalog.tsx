import classNames from 'classnames';
import { ListGames } from '3_features/ListGames';
import { Section } from '5_shared/ui/Section/Section';
import { Container } from '5_shared/ui/Container/Container';
import cls from './SectionGameCatalog.module.scss';
import { Title, TitleMode } from '../../../5_shared/ui/Title/Title';

interface SectionGameCatalogProps {
    className?: string;
}

export const SectionGameCatalog = (props: SectionGameCatalogProps) => {
    const { className } = props;

    return (
        <Section className={classNames(cls.block, className)}>
            <Container>
                <Title
                    tag="h1"
                    text="Все игры"
                    mode={TitleMode.STRING}
                    className={classNames(cls.title)}
                />
                <ListGames />
            </Container>
        </Section>
    );
};
