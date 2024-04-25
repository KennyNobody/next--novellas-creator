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
        <div
            className={
                classNames(
                    cls.block,
                    className,
                )
            }
        >
            {
                data?.title
                && (
                    <p className={classNames(cls.title)}>
                        { data.title }
                    </p>
                )
            }
            {
                data?.link
                && (
                    <a
                        href={`mailto:${data.link}`}
                        className={classNames(cls.link)}
                    >
                        { data.link }
                    </a>
                )
            }
        </div>
    );
};
