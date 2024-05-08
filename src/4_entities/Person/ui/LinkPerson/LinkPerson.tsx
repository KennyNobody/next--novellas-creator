import classNames from 'classnames';
import cls from './LinkPerson.module.scss';
import { ArticlePersonType } from '../../model/types/ArticlePerson';

interface LinkPersonProps {
    isActive?: boolean;
    className?: string;
    clickEvent: () => void;
    data: ArticlePersonType;
}

export const LinkPerson = (props: LinkPersonProps) => {
    const {
        data,
        isActive,
        clickEvent,
        className,
    } = props;

    return (
        <button
            onClick={clickEvent}
            className={
                classNames(
                    cls.block,
                    { [cls['block--active']]: isActive },
                    className,
                )
            }
        >
            { data?.title }
        </button>
    );
};
