import classNames from 'classnames';
import IconLeft from '5_shared/assets/icons/icon-arrow-left.svg';
import IconRight from '5_shared/assets/icons/icon-arrow-right.svg';
import cls from './Pagination.module.scss';

interface PaginationProps {
    className?: string;
    currentPage: number;
    lastPage: number;
    clickEvent?: (num: number) => void;
}

export const Pagination = (props: PaginationProps) => {
    const {
        lastPage,
        currentPage,
        className,
        clickEvent,
    } = props;

    const buttonEvent = (num: number) => {
        if (clickEvent) clickEvent(num);
    };

    const renderPages = () => {
        const pages = [];

        pages.push(
            <button
                key="prev"
                type="button"
                onClick={() => buttonEvent(currentPage - 1)}
                disabled={currentPage === 1}
                className={classNames(cls.button)}
            >
                <IconLeft className={classNames(cls.icon)} />
            </button>,
        );

        const leftBoundary = Math.max(currentPage - 2, 1);
        const rightBoundary = Math.min(currentPage + 2, lastPage);

        if (leftBoundary > 1) {
            pages.push(<span className={classNames(cls.dots)}>...</span>);
        }

        for (let i = leftBoundary; i <= rightBoundary; i += 1) {
            pages.push(
                <button
                    key={i}
                    type="button"
                    onClick={() => buttonEvent(i)}
                    className={
                        classNames(
                            cls.button,
                            { [cls.active]: i === currentPage },
                        )
                    }
                >
                    { i }
                </button>,
            );
        }

        if (rightBoundary < lastPage) {
            pages.push(<span className={classNames(cls.dots)}>...</span>);
        }

        pages.push(
            <button
                key="next"
                type="button"
                disabled={currentPage === lastPage}
                className={classNames(cls.button)}
                onClick={() => buttonEvent(currentPage + 1)}
            >
                <IconRight className={classNames(cls.icon)} />
            </button>,
        );

        return pages;
    };

    return (
        <nav className={classNames(cls.block, className)}>
            {renderPages()}
        </nav>
    );
};
