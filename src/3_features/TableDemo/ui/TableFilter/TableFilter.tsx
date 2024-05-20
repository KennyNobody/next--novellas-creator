import React from 'react';
import { Column } from '@tanstack/react-table';
import classNames from 'classnames';
import { TableInput } from '../TableInput/TableInput';
import { Person } from '../makedata';
import cls from './TableFilter.module.scss';

interface TableFilterProps {
    column: Column<Person, unknown>;
}

export const TableFilter = (props: TableFilterProps) => {
    const {
        column,
    } = props;
    const columnFilterValue = column.getFilterValue();
    const meta = column.columnDef.meta ?? {};
    const { filterVariant } = meta;
    const selectOptions = meta.selectOptions ?? [];

    return filterVariant === 'select' ? (
        <select
            className={classNames(cls.select)}
            onChange={(e) => column.setFilterValue(e.target.value)}
            value={columnFilterValue?.toString()}
        >
            {/* See faceted column filters example for dynamic select options */}
            <option value="">Выбрать...</option>
            {
                selectOptions
                && selectOptions?.map((item: string) => (
                    <option key={item} value={item}>{item}</option>
                ))
            }
        </select>
    ) : (
        <TableInput
            onChange={(value) => column.setFilterValue(value)}
            placeholder="Искать..."
            type="text"
            initialValue={(columnFilterValue ?? '') as string}
        />
    );
};
