'use client';

import React, { useState } from 'react';
import classNames from 'classnames';
import {
    ButtonRegular,
    ButtonTagType,
} from '5_shared/ui/ButtonRegular';
import cls from './FormVacancy.module.scss';
import { useSentVacancyForm } from '../api/formApi';

interface FormVacancyProps {
    className?: string;
}

export default function FormVacancy(props: FormVacancyProps) {
    const { className } = props;
    const [email, setEmail] = useState<string>('');
    const [fio, setFio] = useState<string>('');
    const [telefon, setTelefon] = useState<string>('');
    const [letter, setLetter] = useState<string>('');
    const [resume, setResume] = useState<string>('');
    const [buttonText, setButtonText] = useState('Отправить');
    const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
    const [isFioValid, setIsFioValid] = useState<boolean>(true);
    const [isTelefonValid, setIsTelefonValid] = useState<boolean>(true);
    const [isResumeValid, setIsResumeValid] = useState<boolean>(true);

    const [trigger, { isLoading }] = useSentVacancyForm();

    const submitForm = async (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
        e?.preventDefault();

        if (!email) {
            setIsEmailValid(false);
        } else {
            setIsEmailValid(true);
        }

        if (!fio) {
            setIsFioValid(false);
        } else {
            setIsFioValid(true);
        }

        if (!telefon) {
            setIsTelefonValid(false);
        } else {
            setIsTelefonValid(true);
        }

        if (!resume) {
            setIsResumeValid(false);
        } else {
            setIsResumeValid(true);
        }

        if (!email || !fio || !telefon || !resume) {
            return;
        }

        setButtonText('Отправка...');

        try {
            const data = {
                email,
                fio,
                telefon,
                ssylka_na_rezyume: resume,
                soprovoditelnoe_pismo: letter,
            };
            console.log(data);
            await trigger(data).unwrap();
            setButtonText('Отправлено');
        } catch (error) {
            setButtonText('Ошибка!');
            console.error('Ошибка при отправке формы: ', error);
        } finally {
            setTimeout(() => {
                setButtonText('Отправить');
            }, 3000);
        }
    };

    return (
        <div className={classNames(cls.block, className)}>
            <h2 className={classNames(cls.title)}>
                Ваши персональные данные
            </h2>
            <p className={classNames(cls.caption)}>
                Пожалуйста, введите следующие данные,
                <br />
                чтобы начать процесс подачи заявки.
            </p>
            <form onSubmit={submitForm} className={classNames(cls.form)}>
                <div className={classNames(cls.main)}>
                    <input type="text" value={email} placeholder="Ваш e-mail" onChange={(e) => setEmail(e.target.value)} className={classNames(cls.input, !isEmailValid && cls.alert)} />
                    <input type="text" value={fio} placeholder="Ваше ФИО" onChange={(e) => setFio(e.target.value)} className={classNames(cls.input, !isFioValid && cls.alert)} />
                    <input type="text" value={telefon} placeholder="Ваш телефон" onChange={(e) => setTelefon(e.target.value)} className={classNames(cls.input, !isTelefonValid && cls.alert)} />
                    <input type="text" value={resume} placeholder="Ссылка на резюме" onChange={(e) => setResume(e.target.value)} className={classNames(cls.input, !isResumeValid && cls.alert)} />
                    <textarea value={letter} placeholder="Сопроводительное письмо" onChange={(e) => setLetter(e.target.value)} className={classNames(cls.textarea)} />
                    <ButtonRegular
                        label={buttonText}
                        disabled={isLoading}
                        tag={ButtonTagType.BUTTON}
                        className={classNames(cls.button)}
                    />
                    <p className={classNames(cls.description)}>
                        Оформляя заказ, вы соглашаетесь
                        с условиями Оферты, Правил, Политики и даете
                        Согласие на обработку своих персональных данных
                    </p>
                </div>
            </form>
        </div>
    );
}

export { FormVacancy };
