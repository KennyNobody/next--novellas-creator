import classNames from 'classnames';
import cls from './LinkTax.module.scss';
import { TaxType } from '../../model/types/Tax';

interface LinkTaxProps {
    data: TaxType;
    isActive?: boolean;
    className?: string;
    clickEvent: () => void;
}

export const LinkTax = (props: LinkTaxProps) => {
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
            <span
                className={
                    classNames(
                        cls.content,
                        { [cls['content--active']]: isActive },
                    )
                }
            >
                { data?.title }
            </span>
        </button>
    );
};
