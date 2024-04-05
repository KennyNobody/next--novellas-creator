'use client';

import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { ListPost } from '3_features/ListPost';
import { Section } from '5_shared/ui/Section/Section';
import { Container } from '5_shared/ui/Container/Container';
import { useEffect } from 'react';
import cls from './SectionFrontNews.module.scss';
import { getPostListTempName } from '../../../4_entities/Post/model/selectors/postList';
import { fetchPostList } from '../../../4_entities/Post/model/services/fetchPostList/fetchPostList';
import { useAppDispatch } from '../../../5_shared/state/hooks';
import {ArticlePostType, getPostList} from "../../../4_entities/Post";

interface SectionFrontIntroProps {
    className?: string;
}

export const SectionFrontNews = (props: SectionFrontIntroProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();

    const pageName = useSelector(getPostListTempName);
    // const listData: ArticlePostType[] = useSelector(getPostList.selectAll);
    const listData = useSelector(getPostList.selectAll);

    useEffect(() => {
        dispatch(fetchPostList({}));
    }, []);

    return (
        <Section className={classNames(cls.block, className)}>
            <Container>
                Новости
                {' '}
                { pageName }

                {
                    listData.map((item) => (
                        <div key={item.id}>
                            { item.title }
                        </div>
                    ))
                }
                <ListPost />
            </Container>
        </Section>
    );
};
