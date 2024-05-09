import classNames from 'classnames';
import { ListShop } from '3_features/ListShop';
import {
    Section,
} from '5_shared/ui/Section/Section';
import { Container } from '5_shared/ui/Container/Container';
import cls from './SectionShopCatalog.module.scss';

interface SectionShopCatalogProps {
    className?: string
}

export const SectionShopCatalog = (props: SectionShopCatalogProps) => {
    const { className } = props;

    return (
        <Section
            className={
                classNames(
                    cls.block,
                    className,
                )
            }
        >
            <Container>
                <ListShop />
            </Container>
        </Section>
    );
};
