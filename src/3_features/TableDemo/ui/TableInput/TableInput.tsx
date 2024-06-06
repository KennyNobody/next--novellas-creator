import classNames from 'classnames';
import React, { InputHTMLAttributes, useEffect } from 'react';
import Icon from '5_shared/assets/icons/icon-search.svg';
import cls from './TableInput.module.scss';

interface TableInputProps {
    initialValue: string | number;
    onChange: (value: string | number) => void;
    debounce?: number;
}

export const TableInput = (props: TableInputProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>) => {
    const {
        initialValue,
        onChange,
        debounce = 500,
        ...args
    } = props;

    const [value, setValue] = React.useState(initialValue);

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value);
        }, debounce);

        return () => clearTimeout(timeout);
    }, [value]);

    return (
        <label className={classNames(cls.label)}>
            <input
                {...args}
                value={value}
                className={classNames(cls.input)}
                onChange={(e) => setValue(e.target.value)}
            />
        </label>
    );
};
