import React from 'react';
import classNames from 'classnames';
import IconX from '5_shared/assets/icons/icon-x.svg';
import IconTG from '5_shared/assets/icons/icon-tg.svg';
import IconVK from '5_shared/assets/icons/icon-vk.svg';
import IconInst from '5_shared/assets/icons/icon-inst.svg';
import cls from './Socials.module.scss';
import { SocialLink, IconKey } from '../model/types/Socials';

interface SocialsProps {
    className?: string;
    data: SocialLink[];
}

const renderIcon = (iconKey: IconKey, className: string | undefined) => {
    const iconClassname = className ? classNames(className) : '';

    const iconsComponents: Record<IconKey, React.JSX.Element> = {
        [IconKey.X]: <IconX className={iconClassname} />,
        [IconKey.TG]: <IconTG className={iconClassname} />,
        [IconKey.VK]: <IconVK className={iconClassname} />,
        [IconKey.INST]: <IconInst className={iconClassname} />,
    };

    return iconsComponents[iconKey] || null;
};

const Socials = (props: SocialsProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <nav className={classNames(cls.block, className)}>
            {
                data.map((item) => (
                    <a
                        key={item.id}
                        target="_blank"
                        href={item.link}
                        rel="noopener noreferrer"
                        className={classNames(cls.link, className)}
                    >
                        { renderIcon(item?.icon?.key, classNames(cls.icon)) }
                    </a>
                ))
            }
        </nav>
    );
};

export {
    IconKey,
    Socials,
};
