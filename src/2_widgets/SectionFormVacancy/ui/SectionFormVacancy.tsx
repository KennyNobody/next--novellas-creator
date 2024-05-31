'use client';

import classNames from 'classnames';
import {FormVacancy} from '3_features/FormVacancy';
import {Modal} from '5_shared/ui/Modal/Modal';
import {useState} from 'react';
import cls from './SectionFormVacancy.module.scss';
import {ButtonRegular, ButtonTagType} from "../../../5_shared/ui/ButtonRegular";

interface SectionFormVacancyProps {
    className?: string
}

export const SectionFormVacancy = (props: SectionFormVacancyProps) => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className={classNames(cls.block, className)}>
            <ButtonRegular
                tag={ButtonTagType.BUTTON}
                label="Подать заявку на должность"
                onClickEvent={() => setIsOpen(true)}
            />
            <Modal
                isOpen={isOpen}
                onClose={closeModal}
            >
                <FormVacancy />
            </Modal>
        </div>
    );
};
