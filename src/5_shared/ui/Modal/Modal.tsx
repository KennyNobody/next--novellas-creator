'use client';

import React, { ReactNode, useRef } from 'react';
import classNames from 'classnames';
import Icon from '5_shared/assets/icons/icon-close.svg';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal = (props: ModalProps) => {
    const {
        isOpen,
        onClose,
        children,
        className,
    } = props;
    const modalRef = useRef<HTMLDivElement | null>(null);

    // useEffect(() => {
    //     document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    //
    //     const handleClickOutside = (event: MouseEvent) => {
    //         if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
    //             onClose();
    //         }
    //     };
    //
    //     window.addEventListener('click', handleClickOutside);
    //     return () => window.removeEventListener('click', handleClickOutside);
    // }, [isOpen, onClose]);

    const childClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className={classNames(cls.overlay)}>
            <div className={classNames(cls.block, className)} ref={modalRef} onClick={childClick}>
                {children}
                <button className={classNames(cls.button)} onClick={onClose}>
                    <Icon className={classNames(cls.icon)} />
                </button>
            </div>
        </div>
    );
};
