import classNames from 'classnames';
import cls from './LinkApp.module.scss';
import { LinkAppType } from '../model/types/LinkApp';

interface LinkAppProps {
    data: LinkAppType;
    className?: string;
}

export const LinkApp = (props: LinkAppProps) => {
    const {
        data,
        className,
    } = props;

    if (data?.textLink) {
        return (
            <a
                target="_blank"
                href={data.textLink}
                rel="nofollow noopener noreferrer"
                className={classNames(cls.block, className)}
            >
                {
                    data?.textVisible && <span>{ data.textVisible }</span>
                }
            </a>
        );
    }

    return (
        <p className={classNames(cls.block, className)}>
            {
                data?.textVisible && <span>{ data.textVisible }</span>
            }
        </p>
    );
};
