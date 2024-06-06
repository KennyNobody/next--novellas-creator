import React, { useEffect, useMemo, useState } from 'react';
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
import {
    ArticleJobType,
    useFetchJobList,
} from '4_entities/Job';
import {
    TaxType,
    JobVacancyMode,
    useFetchJobTaxListQuery,
} from '4_entities/Tax';
import { ButtonNext } from '5_shared/ui/ButtonNext/ButtonNext';
import { ButtonNav, ButtonNavMode } from '5_shared/ui/ButtonNav/ButtonNav';
import cls from './TableDemo.module.scss';
import { TableFilter } from '../TableFilter/TableFilter';

declare module '@tanstack/react-table' {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface ColumnMeta<TData extends RowData, TValue> {
        placeholder?: string;
        filterVariant?: 'text' | 'select';
        selectOptions?: string[];
    }
}

const TableDemo = () => {
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [departments, setDepartments] = useState<string[]>([]);
    const [locations, setLocations] = useState<string[]>([]);
    const [products, setProducts] = useState<string[]>([]);
    const { data: jobListData } = useFetchJobList(null);
    const { data: departmentsData } = useFetchJobTaxListQuery(JobVacancyMode.DEPARTMENT);
    const { data: locationsData } = useFetchJobTaxListQuery(JobVacancyMode.LOCATION);
    const { data: productsData } = useFetchJobTaxListQuery(JobVacancyMode.PRODUCT);

    useEffect(() => {
        const departmentOptions: string[] = departmentsData?.map((department: TaxType) => department.title) || [];
        setDepartments(departmentOptions);
    }, [departmentsData]);

    useEffect(() => {
        const locationOptions: string[] = locationsData?.map((location: TaxType) => location.title) || [];
        setLocations(locationOptions);
    }, [locationsData]);

    useEffect(() => {
        const productOptions: string[] = productsData?.map((product: TaxType) => product.title) || [];
        setProducts(productOptions);
    }, [productsData]);

    const columns = useMemo<ColumnDef<ArticleJobType, any>[]>(
        () => [
            {
                header: 'Название вакансии',
                accessorKey: 'title',
                cell: (info) => info.getValue(),
            },
            {
                header: 'Отдел',
                accessorKey: 'department_vacancy',
                meta: {
                    placeholder: 'Отдел',
                    filterVariant: 'select',
                    selectOptions: departments,
                },
                filterFn: (row, columnId, filterValue) => {
                    const actual = row?.original?.department_vacancy[0]?.title.trim();
                    return actual === filterValue;
                },
                cell: (info) => {
                    return info.row.original.department_vacancy[0]?.title.trim();
                },
            },
            {
                header: 'Локация',
                accessorKey: 'mestonakhozhdenie',
                meta: {
                    placeholder: 'Локация',
                    filterVariant: 'select',
                    selectOptions: locations,
                },
                filterFn: (row, columnId, filterValue) => {
                    const actual = row?.original?.mestonakhozhdenie[0]?.title.trim();
                    return actual === filterValue;
                },
                cell: (info) => info.row.original.mestonakhozhdenie[0]?.title,
            },
            {
                accessorKey: 'product_vacancy',
                header: 'Продукт',
                meta: {
                    placeholder: 'Продукт',
                    filterVariant: 'select',
                    selectOptions: products,
                },
                filterFn: (row, columnId, filterValue) => {
                    const actual = row?.original?.product_vacancy[0]?.title.trim();
                    return actual === filterValue;
                },
                cell: (info) => info.row.original.product_vacancy[0]?.title,
            },
            {
                accessorKey: 'link',
                header: 'Перейти',
                enableColumnFilter: false,
                // eslint-disable-next-line react/no-unstable-nested-components
                cell: ({ row }) => <ButtonNext className={classNames(cls.link)} href={`/job/${row.original.id}`} />,
            },
        ],
        [departments, locations, products, jobListData],
    );

    const table = useReactTable({
        data: jobListData || [], // используйте данные из хука, указывая пустой массив по умолчанию
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
        <div className={classNames(cls.block)}>
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
                                            {header.column.getCanFilter() ? (
                                                <TableFilter
                                                    column={header.column}
                                                />
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
            {
                table.getState().pagination.pageIndex === 1
                && !table.getCanNextPage()
                && (
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
                )
            }
        </div>
    );
};

export {
    TableDemo,
};
