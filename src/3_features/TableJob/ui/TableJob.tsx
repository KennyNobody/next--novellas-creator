'use client';

import {
    useEffect, useMemo,
} from 'react';
import {
    ColumnDef, getCoreRowModel,
    TableOptions,
    useReactTable,
} from '@tanstack/react-table';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    GridJob,
    initJobList,
    ArticleJobType,
    getJobList,
    useLazyFetchJobList,
} from '4_entities/Job';
import { useAppDispatch } from '5_shared/state/hooks';
import cls from './TableJob.module.scss';

interface TableJobProps {
    className?: string;
}

export const TableJob = (props: TableJobProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const data: ArticleJobType[] = useSelector(getJobList.selectAll);
    // const isLoading: boolean = useSelector(getPostListLoading) || false;

    const columns = useMemo<ColumnDef<ArticleJobType>[]>(() => [
        {
            accessorKey: 'title', // указываем поле из данных
            header: 'Title', // Заголовок столбца
            // Пропускаете настройку сортировки, если она поддерживается вашим компонентом по умолчанию
        },
        {
            accessorKey: 'date',
            header: 'Date',
            // Пример добавления custom sort function, если нужно (необязательно)
            sortingFn: 'datetime',
        },
        // Дополните другие столбцы по аналогии
    ], []);

    const [getData] = useLazyFetchJobList({});
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    useEffect(() => {
        dispatch(initJobList(getData));
    }, []);

    return (
        <div
            className={
                classNames(cls.block, className)
            }
        >
            <tbody>
                {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                        {/* ... */}
                    </tr>
                ))}
            </tbody>
        </div>
    );
};
