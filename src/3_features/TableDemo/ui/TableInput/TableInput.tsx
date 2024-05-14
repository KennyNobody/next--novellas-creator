import React, { InputHTMLAttributes, useEffect } from 'react';

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
        <input {...args} value={value} onChange={(e) => setValue(e.target.value)} />
    );
};
