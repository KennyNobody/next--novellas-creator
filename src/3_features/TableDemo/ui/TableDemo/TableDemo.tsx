import React, {
    useMemo,
    useState,
    useReducer,
} from 'react';
import {
    RowData,
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    useReactTable,
    getCoreRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
} from '@tanstack/react-table';
import {
    typeOptions,
    placeOptions,
    productOptions,
    departmentsOptions,
} from '../makeselectors';
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
                header: 'Place',
                accessorKey: 'place',
                meta: {
                    filterVariant: 'select',
                    selectOptions: placeOptions,
                },
            },
            {
                accessorKey: 'product',
                header: 'Product',
                meta: {
                    filterVariant: 'select',
                    selectOptions: productOptions,
                },
            },
            {
                accessorKey: 'type',
                header: 'Type',
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
            <table>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} colSpan={header.colSpan}>
                                    {header.isPlaceholder ? null : (
                                        <>
                                            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
                                            <div
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
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id}>
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
            <div>
                <button
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}
                >
                    {'<<'}
                </button>
                <button
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    {'<'}
                </button>
                <button
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    {'>'}
                </button>
                <button
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!table.getCanNextPage()}
                >
                    {'>>'}
                </button>
                <span>
                    <div>Страница</div>
                    <strong>
                        {table.getState().pagination.pageIndex + 1}
                        {' '}
                        из
                        {' '}
                        {table.getPageCount()}
                    </strong>
                </span>
                <span>
                    | Перейти к странице:
                    <input
                        type="number"
                        defaultValue={table.getState().pagination.pageIndex + 1}
                        onChange={(e) => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0;
                            table.setPageIndex(page);
                        }}
                    />
                </span>
                <select
                    value={table.getState().pagination.pageSize}
                    onChange={(e) => {
                        table.setPageSize(Number(e.target.value));
                    }}
                >
                    {[10, 20, 30, 40, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Показывать
                            {' '}
                            {pageSize}
                        </option>
                    ))}
                </select>
            </div>
            {/* <div> */}
            {/*    {table.getPrePaginationRowModel().rows.length} */}
            {/*    {' '} */}
            {/*    Столбцы */}
            {/* </div> */}
            {/* <div> */}
            {/*    <button onClick={() => rerender()}>Принудительно перерисовать</button> */}
            {/* </div> */}
            {/* <div> */}
            {/*    <button onClick={() => refreshData()}>Обновить данные</button> */}
            {/* </div> */}
            {/* <pre> */}
            {/*    {JSON.stringify( */}
            {/*        { columnFilters: table.getState().columnFilters }, */}
            {/*        null, */}
            {/*        2, */}
            {/*    )} */}
            {/* </pre> */}
        </div>
    );
};

export {
    TableDemo,
};
