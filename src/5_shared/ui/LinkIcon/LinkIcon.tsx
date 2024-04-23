import {
    memo,
    HTMLAttributes,
} from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import IconSearch from '5_shared/assets/icons/icon-search.svg';
import IconLogin from '5_shared/assets/icons/icon-login.svg';
import IconCart from '5_shared/assets/icons/icon-cart.svg';
import cls from './LinkIcon.module.scss';

enum IconKey {
    SEARCH,
    LOGIN,
    CART,
}

interface LinkRegularProps extends HTMLAttributes<HTMLAnchorElement> {
    href: string;
    iconKey: IconKey;
    className?: string;
}

const renderIcon = (iconKey: IconKey) => {
    const iconsComponents: Record<IconKey, JSX.Element> = {
        [IconKey.SEARCH]: <IconSearch className={cls.icon} />,
        [IconKey.LOGIN]: <IconLogin className={cls.icon} />,
        [IconKey.CART]: <IconCart className={cls.icon} />,
    };

    return iconsComponents[iconKey] || null;
};

const LinkIcon = memo((props: LinkRegularProps) => {
    const {
        href,
        iconKey,
        children,
        className,
        ...otherProps
    } = props;

    return (
        <Link
            href={href}
            {...otherProps}
            className={classNames(
                cls.block,
                className,
            )}
        >
            { renderIcon(iconKey) }
        </Link>
    );
});

export {
    IconKey,
    LinkIcon,
};
