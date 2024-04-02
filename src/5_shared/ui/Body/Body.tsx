import classNames from 'classnames';
import { ReactNode } from 'react';
import cls from './Body.module.scss';
import IntrinsicElements = JSX.IntrinsicElements;

interface BodyProps {
    className?: string;
    children: ReactNode;
    isStorybook?: boolean;
}

export const Body = (props: BodyProps) => {
    const {
        children,
        className,
        isStorybook,
    } = props;

    const Tag: keyof IntrinsicElements = isStorybook ? 'div' : 'body';

    return (
        <Tag className={classNames(cls.block, className)}>
            { children }
        </Tag>
    );
};
