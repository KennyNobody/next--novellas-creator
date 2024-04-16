import classNames from 'classnames';
import { SectionPageNews } from '2_widgets/SectionPageNews';
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
        <Main className={classNames(cls.block, className)}>
            {
                data?.sectionNews
                && (
                    <SectionPageNews
                        data={data.sectionNews}
                    />
                )
            }
        </Main>
    );
};

export {
    NewsPage,
};
