import classNames from 'classnames';
import cls from './FormSubscription.module.scss';
import {useState} from "react";

interface FormSubscriptionProps {
    className?: string
}

export const FormSubscription = (props: FormSubscriptionProps) => {
    const { className } = props;

    const [buttonText, setButtonText] = useState('Отправить');

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
                <input type="text" />
                <button
                    type="button"
                    className={
                        classNames(
                            cls.button,
                        )
                    }
                >
                    { buttonText }
                </button>
            </form>

            Чекбокс
        </div>

    );
};
