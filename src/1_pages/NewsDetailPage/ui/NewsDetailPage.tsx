import classNames from 'classnames';
import { Main } from '5_shared/ui/Main/Main';
import { Container } from '5_shared/ui/Container/Container';
import cls from './NewsDetailPage.module.scss';

interface NewsDetailPageProps {
    className?: string;
    data: any;
}

const NewsDetailPage = (props: NewsDetailPageProps) => {
    const {
        data,
        className,
    } = props;

    console.log(data);

    return (
        <Main className={classNames(cls.block, className)}>
            <Container>
                {
                    data?.title
                    && <p>{data.title}</p>
                }
                {
                    data?.content
                    && <p>{data.content}</p>
                }
            </Container>
            {/* { */}
            {/*    data?.sectionNews */}
            {/*    && ( */}
            {/*        <SectionPageNews */}
            {/*            data={data.sectionNews} */}
            {/*        /> */}
            {/*    ) */}
            {/* } */}
        </Main>
    );
};

export {
    NewsDetailPage,
};
