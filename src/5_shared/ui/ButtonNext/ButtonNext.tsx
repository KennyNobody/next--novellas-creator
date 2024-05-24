import Link from 'next/link';
import classNames from 'classnames';
import IconRight from '5_shared/assets/icons/icon-right.svg';
import cls from './ButtonNext.module.scss';

interface ButtonNavProps {
    href: string;
    className?: string;
}

const ButtonNext = (props: ButtonNavProps) => {
    const {
        href,
        className,
    } = props;

    return (
        <Link
            href={href}
            className={
                classNames(
                    cls.block,
                    className,
                )
            }
        >
            <IconRight className={classNames(cls.icon)} />
        </Link>
    );
};

export {
    ButtonNext,
};
