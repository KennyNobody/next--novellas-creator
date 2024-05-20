import React, { useMemo, useState } from 'react';
import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    RowData,
    useReactTable,
} from '@tanstack/react-table';
import classNames from 'classnames';
import { ButtonNav, ButtonNavMode } from '5_shared/ui/ButtonNav/ButtonNav';
import {
    departmentsOptions, placeOptions, productOptions, typeOptions,
} from '../makeselectors';
import cls from './TableDemo.module.scss';
import { makeData, Person } from '../makedata';
import { TableFilter } from '../TableFilter/TableFilter';

declare module '@tanstack/react-table' {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface ColumnMeta<TData extends RowData, TValue> {
        filterVariant?: 'text' | 'select';
        selectOptions?: string[];
    }
}

const TableDemo = () => {
    // const rerender = useReducer(() => ({}), {})[1];

    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
        [],
    );

    const columns = useMemo<ColumnDef<Person, any>[]>(
        () => [
            {
                header: 'Название вакансии',
                accessorKey: 'title',
                cell: (info) => info.getValue(),
            },
            {
                header: 'Отдел',
                accessorKey: 'department',
                meta: {
                    filterVariant: 'select',
                    selectOptions: departmentsOptions,
                },
            },
            {
                header: 'Локация',
                accessorKey: 'place',
                meta: {
                    filterVariant: 'select',
                    selectOptions: placeOptions,
                },
            },
            {
                accessorKey: 'product',
                header: 'Продукт',
                meta: {
                    filterVariant: 'select',
                    selectOptions: productOptions,
                },
            },
            {
                accessorKey: 'type',
                header: 'Тип',
                meta: {
                    filterVariant: 'select',
                    selectOptions: typeOptions,
                },
            },
        ],
        [],
    );

    const [data, setData] = useState<Person[]>(() => makeData(50_0));
    // const refreshData = () => setData(() => makeData(50_0)); // stress test

    const table = useReactTable({
        data,
        columns,
        filterFns: {},
        state: {
            columnFilters,
        },
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(), // client side filtering
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        debugTable: true,
        debugHeaders: true,
        debugColumns: false,
    });

    return (
        <div>
            <table className={classNames(cls.table)}>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr
                            key={headerGroup.id}
                            className={classNames(cls.tr)}
                        >
                            {headerGroup.headers.map((header) => (
                                <th className={classNames(cls.th)} key={header.id} colSpan={header.colSpan}>
                                    {header.isPlaceholder ? null : (
                                        <>
                                            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
                                            <div
                                                className={classNames(cls.title)}
                                                {...{
                                                    onClick: header.column.getToggleSortingHandler(),
                                                }}
                                            >
                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext(),
                                                )}
                                                {{
                                                    asc: ' 🔼',
                                                    desc: ' 🔽',
                                                }[header.column.getIsSorted() as string] ?? null}
                                            </div>
                                            {header.column.getCanFilter() ? (
                                                <div>
                                                    <TableFilter
                                                        column={header.column}
                                                    />
                                                </div>
                                            ) : null}
                                        </>
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr
                            key={row.id}
                            className={classNames(cls.tr)}
                        >
                            {row.getVisibleCells().map((cell) => (
                                <td className={classNames(cls.td)} key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext(),
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={classNames(cls.pagination)}>
                <ButtonNav
                    mode={ButtonNavMode.LEFT}
                    isDisabled={!table.getCanPreviousPage()}
                    clickEvent={() => table.previousPage()}
                />

                <span>
                    <strong>
                        {table.getState().pagination.pageIndex + 1}
                        {' '}
                        из
                        {' '}
                        {table.getPageCount()}
                    </strong>
                </span>
                <ButtonNav
                    mode={ButtonNavMode.RIGHT}
                    isDisabled={!table.getCanNextPage()}
                    clickEvent={() => table.nextPage()}
                />
            </div>
        </div>
    );
};

export {
    TableDemo,
};
