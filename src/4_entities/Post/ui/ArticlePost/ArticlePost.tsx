import { useMemo } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import cls from './ArticlePost.module.scss';
import { PostArticleType } from '../../model/types/PostArticle';

interface ArticlePostProps {
    className?: string;
    data?: PostArticleType;
}

export const ArticlePost = (props: ArticlePostProps) => {
    const {
        data,
        className,
    } = props;

    const article = useMemo(() => (
        <Link
            href="id"
            className={
                classNames(
                    cls.article,
                    cls['article--content'],
                    className,
                )
            }
        >
            <div className={classNames(cls.main)}>
                <p>
                    Одиночная запись
                </p>
            </div>
        </Link>
    ), [className, data]);

    return article;
};
