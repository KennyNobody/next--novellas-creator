import classNames from 'classnames';
import IconLeft from '5_shared/assets/icons/icon-left.svg';
import IconRight from '5_shared/assets/icons/icon-right.svg';
import cls from './ButtonNav.module.scss';

enum ButtonNavMode {
    LEFT,
    RIGHT,
}

interface ButtonNavProps {
    className?: string;
    mode: ButtonNavMode;
    isDisabled: boolean;
    clickEvent: () => void;
}

const ButtonNav = (props: ButtonNavProps) => {
    const {
        mode,
        className,
        isDisabled,
        clickEvent,
    } = props;

    const classes = classNames(cls.icon);

    return (
        <button
            disabled={isDisabled}
            onClick={clickEvent}
            className={
                classNames(
                    cls.block,
                    className,
                )
            }
        >
            {
                mode === ButtonNavMode.LEFT
                    ? <IconLeft className={classes} />
                    : <IconRight className={classes} />
            }
        </button>
    );
};

export {
    ButtonNav,
    ButtonNavMode,
};
