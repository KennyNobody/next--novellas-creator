import {
    useEffect,
    FormEvent,
    ChangeEvent,
} from 'react';
import classNames from 'classnames';
import {
    fetchJobList,
    useLazyFetchJobList,
} from '4_entities/Job';
import { TaxSimpleType, TaxType } from '4_entities/Tax';
import {
    useAppDispatch,
    useAppSelector,
} from '5_shared/state/hooks';
import cls from './JobFilter.module.scss';
import {
    getJobFilterType,
    getJobFilterProduct,
    getJobFilterLocation,
    getJobFilterSelected,
    getJobFilterDepartment,
} from '../model/selectors/jobFilter';
import { useLazyFetchJobTax } from '../api/jobFilterApi';
import { initJobFilterList } from '../model/services/initJobFilter/initPostList';
import { jobFilterActions } from '../model/slices/jobFilterSlice';

interface JobFilterProps {
    className?: string;
}

export const JobFilter = ({ className }: JobFilterProps) => {
    const dispatch = useAppDispatch();
    const [getTaxData] = useLazyFetchJobTax({});
    const [getListData] = useLazyFetchJobList({});

    const selectedTax = useAppSelector(getJobFilterSelected) || [];

    const filterOptions = {
        type: useAppSelector(getJobFilterType),
        product: useAppSelector(getJobFilterProduct),
        location: useAppSelector(getJobFilterLocation),
        department: useAppSelector(getJobFilterDepartment),
    };

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(fetchJobList(getListData));
    };

    const changeParams = (data: TaxSimpleType) => {
        dispatch(jobFilterActions.setSelectedParams(data));
    };

    const removeSelectedParam = (data: TaxType) => {
        dispatch(jobFilterActions.removeSelectedEl(data));
    };

    useEffect(() => {
        dispatch(initJobFilterList(getTaxData));
    }, [dispatch, getTaxData]);

    return (
        <div className={classNames(cls.block, className)}>
            <form
                onSubmit={submitForm}
                className={classNames(cls.form)}
            >
                <select
                    defaultValue=""
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => changeParams({
                        key: 'type',
                        slug: e.target.value,
                    })}
                    className={classNames(cls.select, className)}
                >
                    <option value="">Тип вакансии</option>
                    {filterOptions.type?.map((item: TaxType) => (
                        <option key={item.slug} value={item.slug}>{item.title}</option>
                    ))}
                </select>

                <select
                    defaultValue=""
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => changeParams({
                        key: 'product',
                        slug: e.target.value,
                    })}
                    className={classNames(cls.select, className)}
                >
                    <option value="">Продукт</option>
                    {filterOptions.product?.map((item: TaxType) => (
                        <option key={item.slug} value={item.slug}>{item.title}</option>
                    ))}
                </select>

                <select
                    defaultValue=""
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => changeParams({
                        key: 'location',
                        slug: e.target.value,
                    })}
                    className={classNames(cls.select, className)}
                >
                    <option value="">Локация</option>
                    {filterOptions.location?.map((item: TaxType) => (
                        <option key={item.slug} value={item.slug}>{item.title}</option>
                    ))}
                </select>

                <select
                    defaultValue=""
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => changeParams({
                        key: 'department',
                        slug: e.target.value,
                    })}
                    className={classNames(cls.select, className)}
                >
                    <option value="">Направление</option>
                    {filterOptions.department?.map((item: TaxType) => (
                        <option key={item.slug} value={item.slug}>{item.title}</option>
                    ))}
                </select>

                <button className={classNames(cls.button)}>Оправить</button>
            </form>
            <div>
                {
                    selectedTax.map((item) => (
                        <button
                            type="button"
                            key={item.slug}
                            onClick={() => removeSelectedParam(item)}
                        >
                            { item.title }
                        </button>
                    ))
                }
            </div>
        </div>
    );
};
