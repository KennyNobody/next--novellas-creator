import classNames from 'classnames';
import { Editor } from '5_shared/ui/Editor/Editor';
import cls from './DetailPost.module.scss';
import { ArticlePostType } from '../../model/types/ArticlePost';
import {setDate} from "../../../../5_shared/libs/helpers/setDate";

interface DetailPostProps {
    className?: string;
    data: ArticlePostType;
}

export const DetailPost = (props: DetailPostProps) => {
    const { data, className } = props;

    return (
        <div className={classNames(cls.DetailPost, className)}>
            {
                data?.date
                && (
                    <time className={classNames(cls.time)}>
                        { setDate(data.date, 'ru') }
                    </time>
                )
            }
            {
                data?.title
                && (
                    <h1 className={classNames(cls.title)}>
                        { data.title }
                    </h1>
                )
            }
            <Editor data={data.content} />
        </div>
    );
};
