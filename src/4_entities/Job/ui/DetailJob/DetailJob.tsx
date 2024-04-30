import classNames from 'classnames';
import { Editor } from '5_shared/ui/Editor/Editor';
import cls from './DetailJob.module.scss';
import { ArticleJobType } from '../../model/types/ArticleJob';

interface DetailJobProps {
    className?: string;
    data: ArticleJobType;
}

export const DetailJob = (props: DetailJobProps) => {
    const { data, className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <Editor data={data.content} />
        </div>
    );
};
