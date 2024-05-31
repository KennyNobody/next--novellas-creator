'use client';

import React, { useState } from 'react';
import classNames from 'classnames';
import {
    ButtonRegular,
    ButtonTagType,
} from '5_shared/ui/ButtonRegular';
import { Label } from '5_shared/ui/Label/Label';
import Icon from '5_shared/assets/icons/icon-next.svg';
import cls from './FormSubscription.module.scss';
import { useSentSubscribeForm } from '../api/formApi';

interface FormSubscriptionProps {
    className?: string;
    mode: 'large' | 'small';
}

export default function FormSubscription(props: FormSubscriptionProps) {
    const { mode, className } = props;
    const [checked, setChecked] = useState(true);
    const [value, setValue] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const [
        buttonText,
        setButtonText,
    ] = useState('Отправить');

    const [trigger, { isLoading }] = useSentSubscribeForm();

    const submitForm = async (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
        e?.preventDefault();

        if (!value) {
            console.log('Поле e-mail не может быть пустым');
            return;
        }

        setButtonText('Отправка...');
        setMessage('Отправка...');

        try {
            await trigger({
                email: value,
            }).unwrap();
            setButtonText('Отправлено');
            setMessage('Отправлено');
        } catch (error) {
            setButtonText('Ошибка!');
            setMessage('Ошибка!');
            console.error('Ошибка при отправке формы: ', error);
        } finally {
            setTimeout(() => {
                setButtonText('Отправить');
                setMessage('');
            }, 3000);
        }
    };

    const formLarge = (
        <div
            className={
                classNames(
                    cls.block,
                )
            }
        >
            <form
                onSubmit={submitForm}
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
                        value={value}
                        placeholder="Ваш e-mail"
                        onChange={(e) => setValue(e.target.value)}
                        className={classNames(cls.input)}
                    />
                    <ButtonRegular
                        label={buttonText}
                        tag={ButtonTagType.BUTTON}
                        disabled={!checked || isLoading}
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

    const formSmall = (
        <form
            onSubmit={submitForm}
            className={
                classNames(
                    cls['form-small'],
                    className,
                )
            }
        >
            <input
                type="text"
                value={value}
                placeholder="Ваш e-mail"
                onChange={(e) => setValue(e.target.value)}
                className={classNames(cls['input-small'])}
            />
            <button
                type="button"
                disabled={isLoading}
                onClick={submitForm}
                className={classNames(cls['button-small'])}
            >
                <Icon className={classNames(cls['icon-small'])} />
            </button>
            {
                message
                && (
                    <div className={classNames(cls.message)}>
                        { message }
                    </div>
                )
            }
        </form>
    );

    return mode === 'large' ? formLarge : formSmall;
}

export {
    FormSubscription,
};
