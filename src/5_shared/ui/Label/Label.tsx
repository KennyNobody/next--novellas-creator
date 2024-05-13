import classNames from 'classnames';
import Icon from '5_shared/assets/icons/icon-check.svg';
import cls from './Label.module.scss';

interface LabelProps {
    className?: string;
    isChecked: boolean;
    changeEvent: () => void;
}

export const Label = (props: LabelProps) => {
    const {
        className,
        isChecked,
        changeEvent,
    } = props;

    return (
        <label className={classNames(cls.block, className)}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={changeEvent}
                className={classNames(cls.input)}
            />
            <div className={classNames(cls.box)}>
                <Icon className={classNames(cls.icon)} />
            </div>
            <span className={classNames(cls.caption)}>
                Согласие на обработку персональных данных
            </span>
        </label>
    );
};
