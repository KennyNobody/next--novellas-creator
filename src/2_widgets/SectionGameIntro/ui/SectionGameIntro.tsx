import classNames from 'classnames';
import cls from './SectionGameIntro.module.scss';

interface SectionGameIntroProps {
    className?: string;
}

export const SectionGameIntro = (props: SectionGameIntroProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            { className }
        </div>
    );
};
