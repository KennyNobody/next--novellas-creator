import React from 'react';
import classNames from 'classnames';
import IconEmail from '5_shared/assets/icons/icon-mail.svg';
import IconPhone from '5_shared/assets/icons/icon-phone.svg';
import IconMarker from '5_shared/assets/icons/icon-marker.svg';
import IconTime from '5_shared/assets/icons/icon-time.svg';
import cls from './LinkApp.module.scss';
import { LinkAppKey, LinkAppType } from '../model/types/LinkApp';

interface LinkAppProps {
    data: LinkAppType;
    className?: string;
}

const renderIcon = (iconKey: LinkAppKey, className: string | undefined) => {
    const iconClassName = className ? classNames(className) : '';

    const iconComponents: Record<LinkAppKey, React.JSX.Element> = {
        [LinkAppKey.EMAIL]: <IconEmail className={iconClassName} />,
        [LinkAppKey.TIME]: <IconTime className={iconClassName} />,
        [LinkAppKey.PHONE]: <IconPhone className={iconClassName} />,
        [LinkAppKey.MARKER]: <IconMarker className={iconClassName} />,
    };

    return iconComponents[iconKey] || null;
};

export const LinkApp = (props: LinkAppProps) => {
    const {
        data,
        className,
    } = props;

    if (!data?.textVisible) return null;

    if (data?.textLink) {
        return (
            <a
                target="_blank"
                href={data.textLink}
                rel="nofollow noopener noreferrer"
                className={classNames(cls.block, className)}
            >
                <span className={classNames(cls.iconBlock)}>
                    { renderIcon(data?.iconKey?.key, classNames(cls.icon)) }
                </span>
                {
                    data?.textVisible && <span>{ data.textVisible }</span>
                }
            </a>
        );
    }

    return (
        <p className={classNames(cls.block, className)}>
            <span className={classNames(cls.iconBlock)}>
                { renderIcon(data?.iconKey?.key, classNames(cls.icon)) }
            </span>
            {
                data?.textVisible && <span>{ data.textVisible }</span>
            }
        </p>
    );
};
