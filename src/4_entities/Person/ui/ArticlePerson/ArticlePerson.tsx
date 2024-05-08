import { useMemo } from 'react';
import classNames from 'classnames';
import cls from './ArticlePerson.module.scss';
import { ArticlePersonType } from '../../model/types/ArticlePerson';

interface ArticlePersonProps {
    className?: string;
    data?: ArticlePersonType;
}

export const ArticlePerson = (props: ArticlePersonProps) => {
    const {
        data,
        className,
    } = props;

    const article = useMemo(() => (
        <article
            className={
                classNames(
                    cls.block,
                    className,
                )
            }
        >
            { data?.title }
        </article>
    ), [className, data]);

    return article;
};
