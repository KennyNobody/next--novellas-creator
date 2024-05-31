import {useMemo} from 'react';
import classNames from 'classnames';
import {Editor, EditorMode} from '5_shared/ui/Editor/Editor';
import grid from '5_shared/styles/grid.module.scss';
import cls from './ArticlePerson.module.scss';
import {ArticlePersonType} from '../../model/types/ArticlePerson';

interface ArticlePersonProps {
    className?: string;
    data?: ArticlePersonType;
}

export const ArticlePerson = (props: ArticlePersonProps) => {
    const {
        data,
        className,
    } = props;

    return useMemo(() => (
        <article
            className={
                classNames(
                    cls.block,
                    className,
                )
            }
        >
            <div className={classNames(grid.grid, cls.grid)}>
                <div
                    className={
                        classNames(
                            grid['grid__col--5'],
                            cls['column-picture'],
                        )
                    }
                >
                    <picture className={classNames(cls.picture)}>
                        {
                            data?.picture?.permalink
                            && (
                                <img src={data.picture.permalink} alt={data.title || '#'} />
                            )
                        }
                    </picture>
                </div>
                <div
                    className={
                        classNames(
                            grid['grid__col--5'],
                            cls['column-info'],
                        )
                    }
                >
                    {
                        data?.job
                        && (
                            <p className={classNames(cls.job)}>
                                { data.job }
                            </p>
                        )
                    }
                    {
                        data?.title
                        && (
                            <h3 className={classNames(cls.title)}>
                                {data?.title}
                            </h3>
                        )
                    }
                    {
                        data?.content
                        && (
                            <Editor
                                data={data.content}
                                mode={EditorMode.INVERTED}
                            />
                        )
                    }
                </div>
            </div>
        </article>
    ), [className, data]);
};
