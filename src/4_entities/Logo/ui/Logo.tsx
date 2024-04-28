import Link from 'next/link';
import classNames from 'classnames';
import { RoutesList, RouteSlug } from '5_shared/config/routes';
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
            href={RoutesList[RouteSlug.FRONT].url}
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
