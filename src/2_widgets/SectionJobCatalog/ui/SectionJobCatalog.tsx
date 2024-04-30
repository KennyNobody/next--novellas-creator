import classNames from 'classnames';
import {Section, SectionDecorType, SectionTagType, SectionThemeMode,} from '5_shared/ui/Section/Section';
import {Container} from '5_shared/ui/Container/Container';
import cls from './SectionJobCatalog.module.scss';

interface SectionJobCatalogProps {
    className?: string;
}

export const SectionJobCatalog = (props: SectionJobCatalogProps) => {
    const { className } = props;

    return (
        <Section
            tag={SectionTagType.SECTION}
            theme={SectionThemeMode.LiGHT}
            className={
                classNames(
                    cls.block,
                    className,
                )
            }
        >
            <Container>
                123
            </Container>
        </Section>
    );
};
