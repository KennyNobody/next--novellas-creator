import classNames from 'classnames';
import { DetailPost } from '4_entities/Post';
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
        <Main className={classNames(cls.block, className)}>
            <Container>
                {
                    data?.sectionPostDetail
                    && (
                        <DetailPost data={data.sectionPostDetail} />
                    )
                }
            </Container>
        </Main>
    );
};

export {
    NewsDetailPage,
};
