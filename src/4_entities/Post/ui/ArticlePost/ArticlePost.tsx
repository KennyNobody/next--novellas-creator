import { useMemo } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import cls from './ArticlePost.module.scss';
import { ArticlePostType } from '../../model/types/ArticlePost';

interface ArticlePostProps {
    className?: string;
    data?: ArticlePostType;
}

export const ArticlePost = (props: ArticlePostProps) => {
    const {
        data,
        className,
    } = props;

    const article = useMemo(() => (
        <Link
            href={`/news/${data?.id}`}
            className={
                classNames(
                    cls.block,
                    className,
                )
            }
        >
            <div className={classNames(cls.main)}>
                <p>
                    { data?.title }
                </p>
            </div>
        </Link>
    ), [className, data]);

    return article;
};
