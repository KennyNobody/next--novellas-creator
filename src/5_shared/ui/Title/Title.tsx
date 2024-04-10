import classNames from 'classnames';
import cls from './Title.module.scss';

export enum TitleMode {
    STRING,
    MARKUP,
}

interface TitleProps {
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
    text: string;
    mode: TitleMode,
    className?: string;
}

export const Title = (props: TitleProps) => {
    const {
        tag,
        text,
        mode,
        className,
    } = props;

    const Tag: keyof JSX.IntrinsicElements = tag;

    if (mode === TitleMode.MARKUP) {
        return (
            <Tag
                className={
                    classNames(
                        cls.title,
                        className,
                    )
                }
                dangerouslySetInnerHTML={{
                    __html: text,
                }}
            />
        );
    }

    return (
        <Tag className={classNames(cls.title, className)}>
            { text }
        </Tag>
    );
};
