import classNames from 'classnames';
import { Editor } from '5_shared/ui/Editor/Editor';
import cls from './DetailPost.module.scss';
import { DetailPostType } from '../../model/types/DetailPost';

interface DetailPostProps {
    className?: string;
    data: DetailPostType;
}

export const DetailPost = (props: DetailPostProps) => {
    const { data, className } = props;

    return (
        <div className={classNames(cls.DetailPost, className)}>
            <Editor data={data.content} />
        </div>
    );
};
