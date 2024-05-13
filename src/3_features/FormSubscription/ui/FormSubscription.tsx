import { useState } from 'react';
import classNames from 'classnames';
import { Label } from '5_shared/ui/Label/Label';
import { ButtonRegular, ButtonTagType } from '5_shared/ui/ButtonRegular';
import cls from './FormSubscription.module.scss';

interface FormSubscriptionProps {
    className?: string
}

export const FormSubscription = (props: FormSubscriptionProps) => {
    const { className } = props;
    const [checked, setChecked] = useState(true);

    const [
        buttonText,
        // setButtonText,
    ] = useState('Отправить');

    return (
        <div
            className={
                classNames(
                    cls.block,
                )
            }
        >
            <form
                className={
                    classNames(
                        cls.block,
                        className,
                    )
                }
            >
                <div className={classNames(cls.main)}>
                    <input
                        type="text"
                        placeholder="Ваш e-mail"
                        className={classNames(cls.input)}
                    />
                    <ButtonRegular
                        label={buttonText}
                        disabled={!checked}
                        tag={ButtonTagType.BUTTON}
                        className={classNames(cls.button)}
                    />
                </div>
                <Label
                    isChecked={checked}
                    changeEvent={() => setChecked(!checked)}
                />
            </form>
        </div>

    );
};
