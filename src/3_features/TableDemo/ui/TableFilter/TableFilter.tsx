import React from 'react';
import { Column } from '@tanstack/react-table';
import { TableInput } from '../TableInput/TableInput';
import { Person } from '../makedata';

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
            onChange={(e) => column.setFilterValue(e.target.value)}
            value={columnFilterValue?.toString()}
        >
            {/* See faceted column filters example for dynamic select options */}
            <option value="">Выбрать...</option>
            {
                selectOptions
                && selectOptions?.map((item: string) => (
                    <option value={item}>{item}</option>
                ))
            }
        </select>
    ) : (
        <TableInput
            onChange={(value) => column.setFilterValue(value)}
            placeholder="Search..."
            type="text"
            initialValue={(columnFilterValue ?? '') as string}
        />
    );
};
