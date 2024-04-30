import classNames from 'classnames';
import { ListPost } from '3_features/ListPost';
import {
    Section,
    SectionTagType,
    SectionThemeMode,
} from '5_shared/ui/Section/Section';
import { Title, TitleMode } from '5_shared/ui/Title/Title';
import { Container } from '5_shared/ui/Container/Container';
import { SectionListNewsType } from '../model/types/SectionListNews';
import cls from './SectionListNews.module.scss';

interface SectionListNewsProps {
    className?: string;
    data: SectionListNewsType;
}

export const SectionListNews = (props: SectionListNewsProps) => {
    const {
        data,
        className,
    } = props;

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
