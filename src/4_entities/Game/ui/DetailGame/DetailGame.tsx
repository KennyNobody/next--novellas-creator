import classNames from 'classnames';
import {Picture} from '4_entities/Picture';
import {PlatformList} from '4_entities/Platform';
import {Editor, EditorMode} from '5_shared/ui/Editor/Editor';
import cls from './DetailGame.module.scss';
import {ArticleGameType} from '../../model/types/ArticleGame';
import {useEffect} from "react";

interface DetailGameProps {
    className?: string;
    data: ArticleGameType;
}

export const DetailGame = (props: DetailGameProps) => {
    const { data, className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <div className={classNames(cls.columns)}>
                <picture className={classNames(cls.picture)}>
                    {
                        data.preview
                        && (
                            <Picture data={data?.preview} />
                        )
                    }
                </picture>
                <div className={classNames(cls.info)}>
                    <h1 className={classNames(cls.title)}>
                        { data.title }
                    </h1>
                    <PlatformList data={data.platforms} />
                </div>
            </div>
            <Editor
                data={data.content}
                mode={EditorMode.REGULAR}
            />
        </div>
    );
};
