import React from 'react';
import { Column } from '@tanstack/react-table';
import classNames from 'classnames';
import { ArticleJobType } from '4_entities/Job';
import { TableInput } from '../TableInput/TableInput';
import cls from './TableFilter.module.scss';

interface TableFilterProps {
    column: Column<ArticleJobType, unknown>;
}

export const TableFilter = (props: TableFilterProps) => {
    const {
        column,
    } = props;
    const columnFilterValue = column.getFilterValue();
    const meta = column.columnDef.meta ?? {};
    const { filterVariant, placeholder } = meta;
    const selectOptions = meta.selectOptions ?? [];

    const selFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        column.setFilterValue(e.target.value.trim());
    };

    return filterVariant === 'select' ? (
        <select
            onChange={selFilter}
            className={classNames(cls.select)}
            value={columnFilterValue?.toString()}
        >
            <option value="">{ placeholder || 'Выбрать...' }</option>
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
            placeholder="Должность"
            type="text"
            initialValue={(columnFilterValue ?? '') as string}
        />
    );
};
