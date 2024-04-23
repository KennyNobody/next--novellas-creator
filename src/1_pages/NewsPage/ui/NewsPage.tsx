import classNames from 'classnames';
import { Header } from '2_widgets/Header';
import { SectionPageNews } from '2_widgets/SectionPageNews';
import { SectionSubscribe } from '2_widgets/SectionSubscribe';
import { Main } from '5_shared/ui/Main/Main';
import cls from './NewsPage.module.css';
import { NewsPageType } from '../model/types/NewsPage';

interface SectionPageNewsProps {
    className?: string;
    data: NewsPageType;
}

const NewsPage = (props: SectionPageNewsProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <>
            <Header />
            <Main className={classNames(cls.block, className)}>
                {
                    data?.sectionNews
                    && (
                        <SectionPageNews
                            data={data.sectionNews}
                        />
                    )
                }
                {
                    data?.sectionForm
                    && (
                        <SectionSubscribe
                            data={data?.sectionForm}
                        />
                    )
                }
            </Main>
        </>
    );
};

export {
    NewsPage,
};
