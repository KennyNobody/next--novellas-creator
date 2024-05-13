import React, { ReactNode } from 'react';
import classNames from 'classnames';
import cls from './WrapperDecor.module.scss';

enum WrapperDecorType {
    TOP,
    NONE,
    FULL,
    BOTTOM,
}

interface WrapperDecorProps {
    className?: string;
    children: ReactNode;
    decor?: WrapperDecorType;
    style?: React.CSSProperties;
}

const WrapperDecor = (props: WrapperDecorProps) => {
    const {
        style,
        decor,
        children,
        className,
    } = props;

    const showTopDecor = decor === WrapperDecorType.TOP || decor === WrapperDecorType.FULL;
    const showBottomDecor = decor === WrapperDecorType.BOTTOM || decor === WrapperDecorType.FULL;

    return (
        <div
            style={style}
            className={
                classNames(
                    cls.block,
                    className,
                    { [cls['block--top']]: showTopDecor },
                    { [cls['block--bottom']]: showBottomDecor },
                )
            }
        >
            { children }
        </div>
    );
};

export {
    WrapperDecor,
    WrapperDecorType,
};
