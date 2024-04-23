import { ReactNode } from 'react';
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
    SECTION = 'section',
    FOOTER = 'footer',
}

interface SectionProps {
    isInvert?: true;
    className?: string;
    children: ReactNode;
    tag: SectionTagType;
    decor?: SectionDecorType;
}

const Section = (props: SectionProps) => {
    const {
        tag,
        decor,
        children,
        isInvert,
        className,
    } = props;

    const Tag: keyof JSX.IntrinsicElements = tag;

    const showTopDecor = decor === SectionDecorType.TOP || decor === SectionDecorType.FULL;
    const showBottomDecor = decor === SectionDecorType.BOTTOM || decor === SectionDecorType.FULL;

    return (
        <Tag
            className={
                classNames(
                    cls.block,
                    { [cls['block--invert']]: isInvert },
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
};
