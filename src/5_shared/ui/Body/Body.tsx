import classNames from 'classnames';
import { ReactNode } from 'react';
import cls from './Body.module.scss';

interface BodyProps {
    className?: string;
    children: ReactNode;
}

export const Body = (props: BodyProps) => {
    const {
        children,
        className,
    } = props;

    return (
        <body className={classNames(cls.block, className)}>
            { children }
        </body>
    );
};
