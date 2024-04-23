import classNames from 'classnames';
import cls from './Stack.module.scss';
import {ReactNode} from "react";

enum StackDirectionType {
    X = 'x',
    Y = 'y',
}

enum StackSizeType {
    SMALL = 'small',
    MIDDLE = 'middle',
    LARGE = 'large',
}

interface StackProps {
    className?: string;
    size: StackSizeType;
    children: ReactNode;
    direction: StackDirectionType;
}

const Stack = (props: StackProps) => {
    const {
        size,
        children,
        className,
        direction,
    } = props;

    return (
        <div
            className={
                classNames(
                    cls.block,
                    cls[`block--${size}`],
                    cls[`block--${direction}`],
                    className,
                )
            }
        >
            { children }
        </div>
    );
};

export {
    Stack,
    StackSizeType,
    StackDirectionType,
};
