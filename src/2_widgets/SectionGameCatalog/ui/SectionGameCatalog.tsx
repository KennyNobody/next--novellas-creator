import classNames from 'classnames';
import { ListGames } from '3_features/ListGames';
import { Section } from '5_shared/ui/Section/Section';
import { Container } from '5_shared/ui/Container/Container';
import cls from './SectionGameCatalog.module.scss';

interface SectionGameCatalogProps {
    className?: string;
}

export const SectionGameCatalog = (props: SectionGameCatalogProps) => {
    const { className } = props;

    return (
        <Section className={classNames(cls.block, className)}>
            <Container>
                <ListGames />
            </Container>
        </Section>
    );
};
