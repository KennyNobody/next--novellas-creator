import React, { ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Section.module.scss';

enum SectionDecorType {
    TOP,
    NONE,
    FULL,
    BOTTOM,
}

enum SectionTagType {
    DIV = 'div',
    HEADER = 'header',
    FOOTER = 'footer',
    SECTION = 'section',
}

enum SectionThemeMode {
    LiGHT = 'theme-light',
    DARK = 'theme-dark',
    DARK_DECOR = 'theme-dark-decor',
}

interface SectionProps {
    className?: string;
    children: ReactNode;
    tag: SectionTagType;
    theme?: SectionThemeMode;
    decor?: SectionDecorType;
    style?: React.CSSProperties;
}

const Section = (props: SectionProps) => {
    const {
        tag,
        style,
        theme,
        decor,
        children,
        className,
    } = props;

    const Tag: keyof JSX.IntrinsicElements = tag;

    const showTopDecor = decor === SectionDecorType.TOP || decor === SectionDecorType.FULL;
    const showBottomDecor = decor === SectionDecorType.BOTTOM || decor === SectionDecorType.FULL;

    return (
        <Tag
            style={style}
            className={
                classNames(
                    cls.block,
                    cls[`block--${theme}`],
                    {
                        [cls[`block--${theme}`]]: theme,
                    },
                    className,
                )
            }
        >
            {
                showTopDecor
                && (
                    <div
                        className={
                            classNames(
                                cls.decor,
                                cls['decor--top'],
                            )
                        }
                    />
                )
            }

            { children }
            {
                showBottomDecor
                && (
                    <div
                        className={
                            classNames(
                                cls.decor,
                                cls['decor--bottom'],
                            )
                        }
                    />
                )
            }
        </Tag>
    );
};

export {
    Section,
    SectionTagType,
    SectionDecorType,
    SectionThemeMode,
};
