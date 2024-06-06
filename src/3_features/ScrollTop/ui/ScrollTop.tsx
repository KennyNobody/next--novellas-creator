'use client';

import classNames from 'classnames';
import Icon from '5_shared/assets/icons/icon-next.svg';
import cls from './ScrollTop.module.scss';

interface ScrollTopProps {
    className?: string
}

export const ScrollTop = (props: ScrollTopProps) => {
    const { className } = props;

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // если ты хочешь плавную прокрутку
        });
    };

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className={
                classNames(
                    cls.block,
                    className,
                )
            }
        >
            <div className={classNames(cls.circle)}>
                <Icon
                    className={classNames(cls.icon)}
                />
            </div>
            <span className={classNames(cls.text)}>
                Наверх
            </span>
        </button>
    );
};
