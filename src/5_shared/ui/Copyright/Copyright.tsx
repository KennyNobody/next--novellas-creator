import classNames from 'classnames';
import cls from './Copyright.module.scss';

interface CopyrightProps {
    text: string;
    className?: string;
}

export const Copyright = (props: CopyrightProps) => {
    const {
        text,
        className,
    } = props;

    return (
        <p className={classNames(cls.block, className)}>
            ©
            {' '}
            { text }
        </p>
    );
};
