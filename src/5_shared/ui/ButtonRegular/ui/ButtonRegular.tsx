import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import IconNext from '5_shared/assets/icons/icon-next.svg';
import cls from './ButtonRegular.module.scss';
import {
    ButtonType,
    ButtonTagType,
    ButtonIconType,
} from '../types/ButtonRegular';

interface ButtonRegularProps {
    label: string;
    path?: string;
    type?: ButtonType;
    tag: ButtonTagType;
    className?: string;
    disabled?: boolean;
    icon?: ButtonIconType,
    onClickEvent?: () => void;
}

const icons = {
    next: () => <IconNext className={classNames(cls.icon, cls.loader)} />,
};

export const ButtonRegular = (props: ButtonRegularProps) => {
    const {
        tag,
        type,
        path,
        icon,
        label,
        disabled,
        className,
        onClickEvent,
    } = props;

    const buttonContent = (
        <div className={classNames(cls.wrapper)}>
            <span className={classNames(cls.button__text)}>
                {label}
            </span>
            {icon && React.createElement(icons[icon])}
        </div>
    );

    if (tag === 'link') {
        return (
            <Link
                href={path || '/#/'}
                onClick={onClickEvent}
                className={
                    classNames(
                        cls.button,
                        className,
                    )
                }
            >
                { buttonContent }
            </Link>
        );
    }

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClickEvent}
            className={
                classNames(
                    cls.button,
                    className,
                )
            }
        >
            {buttonContent}
        </button>
    );
};
