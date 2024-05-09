import React, { ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Section.module.scss';

enum SectionThemeMode {
    LiGHT = 'theme-light',
    DARK = 'theme-dark',
    DARK_DECOR = 'theme-dark-decor',
}

interface SectionProps {
    className?: string;
    children: ReactNode;
    theme?: SectionThemeMode;
    style?: React.CSSProperties;
}

const Section = (props: SectionProps) => {
    const {
        style,
        theme,
        children,
        className,
    } = props;

    return (
        <section
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
            { children }
        </section>
    );
};

export {
    Section,
    SectionThemeMode,
};
