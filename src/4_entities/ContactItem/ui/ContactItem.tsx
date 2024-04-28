import classNames from 'classnames';
import cls from './ContactItem.module.scss';
import { ContactItemType } from '../model/types/ContactItem';

interface ContactItemProps {
    className?: string;
    data: ContactItemType;
}

export const ContactItem = (props: ContactItemProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <a
            href={`mailto:${data.link}`}
            className={
                classNames(
                    cls.block,
                    className,
                )
            }
        >
            <span className={classNames(cls.link)}>
                { data.link }
            </span>
            <span className={classNames(cls.caption)}>
                { data.title }
            </span>
        </a>
    );
};
