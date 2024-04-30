import classNames from 'classnames';
import { Editor } from '5_shared/ui/Editor/Editor';
import cls from './DetailPost.module.scss';
import { ArticlePostType } from '../../model/types/ArticlePost';

interface DetailPostProps {
    className?: string;
    data: ArticlePostType;
}

export const DetailPost = (props: DetailPostProps) => {
    const { data, className } = props;

    return (
        <div className={classNames(cls.DetailPost, className)}>
            <Editor data={data.content} />
        </div>
    );
};
