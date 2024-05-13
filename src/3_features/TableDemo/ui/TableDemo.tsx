import React from 'react';
import {
    Column,
    ColumnDef,
    ColumnFiltersState,
    RowData,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';

import { makeData, Person } from './makedata';

declare module '@tanstack/react-table' {
    // allows us to define custom properties for our columns
    interface ColumnMeta<TData extends RowData, TValue> {
        filterVariant?: 'text' | 'range' | 'select'
    }
}

function DebouncedInput({
    value: initialValue,
    onChange,
    debounce = 500,
    ...props
}: {
    value: string | number
    onChange: (value: string | number) => void
    debounce?: number
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
    const [value, setValue] = React.useState(initialValue);

    React.useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value);
        }, debounce);

        return () => clearTimeout(timeout);
    }, [value]);

    return (
        <input {...props} value={value} onChange={(e) => setValue(e.target.value)} />
    );
}

function Filter({ column }: { column: Column<any, unknown> }) {
    const columnFilterValue = column.getFilterValue();
    const { filterVariant } = column.columnDef.meta ?? {};

    return filterVariant === 'range' ? (
        <div>
            <div>
                {/* See faceted column filters example for min max values functionality */}
                <DebouncedInput
                    type="number"
                    value={(columnFilterValue as [number, number])?.[0] ?? ''}
                    onChange={(value) => column.setFilterValue((old: [number, number]) => [value, old?.[1]])}
                    placeholder="Min"
                />
                <DebouncedInput
                    type="number"
                    value={(columnFilterValue as [number, number])?.[1] ?? ''}
                    onChange={(value) => column.setFilterValue((old: [number, number]) => [old?.[0], value])}
                    placeholder="Max"
                />
            </div>
            <div />
        </div>
    ) : filterVariant === 'select' ? (
        <select
            onChange={(e) => column.setFilterValue(e.target.value)}
            value={columnFilterValue?.toString()}
        >
            {/* See faceted column filters example for dynamic select options */}
            <option value="">All</option>
            <option value="complicated">complicated</option>
            <option value="relationship">relationship</option>
            <option value="single">single</option>
        </select>
    ) : (
        <DebouncedInput
            onChange={(value) => column.setFilterValue(value)}
            placeholder="Search..."
            type="text"
            value={(columnFilterValue ?? '') as string}
        />
    );
}

const TableDemo = () => {
    const rerender = React.useReducer(() => ({}), {})[1];

    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        [],
    );

    const columns = React.useMemo<ColumnDef<Person, any>[]>(
        () => [
            {
                accessorKey: 'firstName',
                cell: (info) => info.getValue(),
            },
            {
                accessorFn: (row) => row.lastName,
                id: 'lastName',
                cell: (info) => info.getValue(),
                header: () => 'Last Name',
            },
            {
                accessorFn: (row) => `${row.firstName} ${row.lastName}`,
                id: 'fullName',
                header: 'Full Name',
                cell: (info) => info.getValue(),
            },
            {
                accessorKey: 'age',
                header: () => 'Age',
                meta: {
                    filterVariant: 'range',
                },
            },
            {
                accessorKey: 'visits',
                header: () => 'Visits',
                meta: {
                    filterVariant: 'range',
                },
            },
            {
                accessorKey: 'status',
                header: 'Status',
                meta: {
                    filterVariant: 'select',
                },
            },
            {
                accessorKey: 'progress',
                header: 'Profile Progress',
                meta: {
                    filterVariant: 'range',
                },
            },
        ],
        [],
    );

    const [data, setData] = React.useState<Person[]>(() => makeData(5_000));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const refreshData = () => setData((_old) => makeData(50_000)); // stress test

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
                                                    <Filter column={header.column} />
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
                    <div>Page</div>
                    <strong>
                        {table.getState().pagination.pageIndex + 1}
                        {' '}
                        of
                        {' '}
                        {table.getPageCount()}
                    </strong>
                </span>
                <span>
                    | Go to page:
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
                            Show
                            {' '}
                            {pageSize}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                {table.getPrePaginationRowModel().rows.length}
                {' '}
                Rows
            </div>
            <div>
                <button onClick={() => rerender()}>Force Rerender</button>
            </div>
            <div>
                <button onClick={() => refreshData()}>Refresh Data</button>
            </div>
            <pre>
                {JSON.stringify(
                    { columnFilters: table.getState().columnFilters },
                    null,
                    2,
                )}
            </pre>
        </div>
    );
};

export {
    TableDemo,
};
