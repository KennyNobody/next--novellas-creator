import classNames from 'classnames';
import cls from './MapFrame.module.scss';

interface MapFrameProps {
    data: string;
    className?: string;
}

export const MapFrame = (props: MapFrameProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <div
            className={classNames(cls.block, className)}
            dangerouslySetInnerHTML={{
                __html: data,
            }}
        />
    );
};
