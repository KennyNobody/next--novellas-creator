import classNames from 'classnames';
import { Header } from '2_widgets/Header';
import { DetailPost } from '4_entities/Post';
import {
    Section,
    SectionTagType,
    SectionDecorType,
} from '5_shared/ui/Section/Section';
import { Main } from '5_shared/ui/Main/Main';
import { Container } from '5_shared/ui/Container/Container';
import cls from './NewsDetailPage.module.scss';
import { NewsDetailPageType } from '../model/types/NewsDetailPage';

interface NewsDetailPageProps {
    className?: string;
    data: NewsDetailPageType;
}

const NewsDetailPage = (props: NewsDetailPageProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <>
            <Header />
            <Main className={classNames(cls.block, className)}>
                <Section
                    isInvert
                    tag={SectionTagType.SECTION}
                    decor={SectionDecorType.BOTTOM}
                >
                    <Container>
                        {
                            data?.sectionPostDetail
                            && (
                                <DetailPost data={data.sectionPostDetail} />
                            )
                        }
                    </Container>
                </Section>
            </Main>
        </>
    );
};

export {
    NewsDetailPage,
};
