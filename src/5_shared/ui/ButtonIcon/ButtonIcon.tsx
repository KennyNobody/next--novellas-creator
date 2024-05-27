import React, {
    memo,
    HTMLAttributes,
} from 'react';
import classNames from 'classnames';
import IconMenu from '5_shared/assets/icons/icon-menu.svg';
import IconBack from '5_shared/assets/icons/icon-back.svg';
import cls from './ButtonIcon.module.scss';

enum IconKey {
    MENU,
    BACK,
}

interface ButtonIconProps extends HTMLAttributes<HTMLAnchorElement> {
    iconKey: IconKey;
    className?: string;
    clickEvent: () => void;
}

const renderIcon = (iconKey: IconKey) => {
    const iconsComponents: Record<IconKey, React.JSX.Element> = {
        [IconKey.MENU]: <IconMenu className={cls.icon} />,
        [IconKey.BACK]: <IconBack className={cls.icon} />,
    };

    return iconsComponents[iconKey] || null;
};

const ButtonIcon = memo((props: ButtonIconProps) => {
    const {
        iconKey,
        className,
        clickEvent,
    } = props;

    return (
        <button
            onClick={clickEvent}
            className={classNames(
                cls.block,
                className,
            )}
        >
            <span className={classNames(cls.wrapper)}>
                { renderIcon(iconKey) }
            </span>
        </button>
    );
});

export {
    IconKey,
    ButtonIcon,
};
