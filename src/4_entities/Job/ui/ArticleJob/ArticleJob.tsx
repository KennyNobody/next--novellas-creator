import Link from 'next/link';
import {useMemo} from 'react';
import classNames from 'classnames';
import {Editor, EditorMode} from '5_shared/ui/Editor/Editor';
import cls from './ArticleJob.module.scss';
import {ArticleJobType} from '../../model/types/ArticleJob';

interface ArticleJobProps {
    className?: string;
    data?: ArticleJobType;
}

export const ArticleJob = (props: ArticleJobProps) => {
    const {
        data,
        className,
    } = props;

    const article = useMemo(() => (
        <Link
            href={`/job/${data?.id}`}
            className={
                classNames(
                    cls.block,
                    className,
                )
            }
        >

            {
                data?.preview_small?.permalink
                && (
                    <picture className={classNames(cls.picture)}>
                        <img src={data.preview_small.permalink} alt={data?.title || '#'} />
                    </picture>
                )
            }
            <div className={classNames(cls.main)}>
                {
                    data?.title
                    && (
                        <h3 className={classNames(cls.title)}>
                            { data.title }
                        </h3>
                    )
                }
                {
                    data?.previewCaption
                    && (
                        <Editor
                            mode={EditorMode.REGULAR}
                            data={data.previewCaption}
                        />
                    )
                }
            </div>
        </Link>
    ), [className, data]);

    return article;
};
