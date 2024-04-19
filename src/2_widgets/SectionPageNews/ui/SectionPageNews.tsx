import classNames from 'classnames';
import { ListPost } from '3_features/ListPost';
import { Section } from '5_shared/ui/Section/Section';
import { Title, TitleMode } from '5_shared/ui/Title/Title';
import { Container } from '5_shared/ui/Container/Container';
import cls from './SectionPageNews.module.scss';
import { SectionPageNewsType } from '../model/types/SectionPageNews';

interface SectionPageNewsProps {
    className?: string;
    data: SectionPageNewsType;
}

export const SectionPageNews = (props: SectionPageNewsProps) => {
    const {
        data,
        className,
    } = props;

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
                {
                    data?.title
                    && (
                        <Title
                            tag="h1"
                            text={data.title}
                            mode={TitleMode.STRING}
                            className={classNames(cls.title)}
                        />
                    )
                }
                <ListPost />
            </Container>
        </Section>
    );
};
