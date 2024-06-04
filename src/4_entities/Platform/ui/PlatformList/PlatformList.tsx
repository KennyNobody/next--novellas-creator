import classNames from 'classnames';
import cls from './PlatformList.module.scss';
import { PlatformType } from '../../model/Platform';

interface PlatformListProps {
    className?: string;
    data: PlatformType[];
}

export const PlatformList = (props: PlatformListProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <span className={cls.title}>
                Доступно на
            </span>
            {
                data.map((item) => (
                    <a
                        target="_blank"
                        key={item.id}
                        href={item.link}
                        rel="noopener noreferrer"
                        className={classNames(cls.item)}
                    >
                        { item.name }
                    </a>
                ))
            }
        </div>
    );
};
