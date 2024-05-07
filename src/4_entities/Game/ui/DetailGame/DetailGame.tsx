import classNames from 'classnames';
import { Editor } from '5_shared/ui/Editor/Editor';
import cls from './DetailGame.module.scss';
import { ArticleGameType } from '../../model/types/ArticleGame';

interface DetailGameProps {
    className?: string;
    data: ArticleGameType;
}

export const DetailGame = (props: DetailGameProps) => {
    const { data, className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <Editor data={data.content} />
        </div>
    );
};
