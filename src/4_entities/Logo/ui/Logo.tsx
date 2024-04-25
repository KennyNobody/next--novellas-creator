import Link from 'next/link';
import classNames from 'classnames';
import cls from './Logo.module.scss';
import { LogoType } from '../model/types/Logo';

enum LogoMode {
    LIGHT,
    DARK,
}

interface LogoProps {
    mode: LogoMode;
    className?: string;
    data: LogoType;
}
const Logo = (props: LogoProps) => {
    const {
        mode,
        data,
        className,
    } = props;

    const logoData = mode === LogoMode.DARK ? data.logoDark : data.logoWhite;

    return (
        <Link
            href="./"
            className={classNames(cls.block, className)}
        >
            <img src={logoData.permalink} alt="логотип" />
        </Link>
    );
};

export {
    Logo,
    LogoMode,
};
