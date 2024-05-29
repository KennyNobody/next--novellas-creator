import classNames from 'classnames';
import { Editor, EditorMode } from '5_shared/ui/Editor/Editor';
import { setDate } from '5_shared/libs/helpers/setDate';
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
            {
                data?.previewDetail?.permalink
                && (
                    <img
                        alt={data?.title || '#'}
                        className={classNames(cls['img-desktop'])}
                        src={data?.previewDetail?.permalink}
                    />
                )
            }
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
            {
                data?.previewDetail?.permalink
                && (
                    <img
                        alt={data?.title || '#'}
                        className={classNames(cls['img-mobile'])}
                        src={data?.previewDetail?.permalink}
                    />
                )
            }
            <Editor
                data={data.content}
                mode={EditorMode.REGULAR}
            />
        </div>
    );
};
