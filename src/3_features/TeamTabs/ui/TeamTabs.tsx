'use client';

import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    getPersonList,
    initPersonList,
    ArticlePersonType,
    // getPersonListLoading,
    useLazyFetchPersonList, LinkPerson, ArticlePerson,
} from '4_entities/Person';
import { useAppDispatch } from '5_shared/state/hooks';
import cls from './TeamTabs.module.scss';

interface TeamTabsProps {
    className?: string
}

export const TeamTabs = (props: TeamTabsProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const data: ArticlePersonType[] = useSelector(getPersonList.selectAll);
    // const isLoading: boolean = useSelector(getPersonListLoading) || false;
    const [getData] = useLazyFetchPersonList({});

    useEffect(() => {
        dispatch(initPersonList(getData));
    }, []);

    useEffect(() => {
        if (data?.length > 0) {
            setActiveIndex(0);
        }
    }, [data]);

    const el = (
        <div className={classNames(cls.block, className)}>
            <div className={classNames(cls.toolbar)}>
                <nav
                    className={classNames(cls.nav)}
                >
                    {
                        data?.map((item, index) => (
                            <LinkPerson
                                data={item}
                                key={item.id}
                                isActive={index === activeIndex}
                                clickEvent={() => setActiveIndex(index)}
                            />
                        ))
                    }
                </nav>
            </div>
            {
                data?.map((item, index) => {
                    if (index === activeIndex) {
                        return (
                            <ArticlePerson
                                data={item}
                                key={item.id}
                            />
                        );
                    }

                    return null;
                })
            }
        </div>
    );

    return data ? el : 'Загрузка...';
};
