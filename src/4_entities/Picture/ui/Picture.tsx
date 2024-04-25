import classNames from 'classnames';
import cls from './Picture.module.scss';
import { PictureType } from '../model/types/Picture';

interface PictureProps {
    altText?: string;
    className?: string;
    data: PictureType;
}

export const Picture = (props: PictureProps) => {
    const {
        altText = '#',
        data,
        className,
    } = props;

    return (
        <picture className={classNames(cls.block, className)}>
            <img src={data.permalink} alt={altText} />
        </picture>
    );
};
