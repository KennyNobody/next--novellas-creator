import classNames from 'classnames';
import cls from './Editor.module.scss';

export enum EditorMode {
    REGULAR = 'regular',
    INVERTED = 'inverted',
}

interface EditorProps {
    data: string;
    mode: EditorMode;
    className?: string;
}

export const Editor = (props: EditorProps) => {
    const {
        data,
        mode,
        className,
    } = props;

    return (
        <div
            className={
                classNames(
                    cls.block,
                    cls[`block--${mode}`],
                    className,
                )
            }
            dangerouslySetInnerHTML={{
                __html: data,
            }}
        />
    );
};
