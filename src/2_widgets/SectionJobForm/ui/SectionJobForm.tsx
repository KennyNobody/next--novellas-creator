import classNames from 'classnames';
import {
    Section,
    SectionTagType,
} from '5_shared/ui/Section/Section';
import { Container } from '5_shared/ui/Container/Container';
import cls from './SectionJobForm.module.scss';

interface SectionJobFormProps {
    className?: string
}

export const SectionJobForm = (props: SectionJobFormProps) => {
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
                Форма поиска работы
            </Container>
        </Section>
    );
};
