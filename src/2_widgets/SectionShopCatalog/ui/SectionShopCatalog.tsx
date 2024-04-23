import classNames from 'classnames';
import {
    Section,
    SectionTagType,
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
            tag={SectionTagType.SECTION}
            className={
                classNames(
                    cls.block,
                    className,
                )
            }
        >
            <Container>
                Секция каталога магазина
            </Container>
        </Section>
    );
};
