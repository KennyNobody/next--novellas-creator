import { ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Section.module.scss';

interface SectionProps {
    className?: string;
    children: ReactNode;
}

export const Section = (props: SectionProps) => {
    const {
        children,
        className,
    } = props;

    return (
        <section className={classNames(cls.block, className)}>
            { children }
        </section>
    );
};
