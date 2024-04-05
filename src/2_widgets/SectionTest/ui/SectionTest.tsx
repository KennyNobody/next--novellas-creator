'use client';

import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { ListPost } from '3_features/ListPost';
import { Section } from '5_shared/ui/Section/Section';
import { Container } from '5_shared/ui/Container/Container';
import { getPostListTempName } from '4_entities/Post/model/selectors/postList';
import { useAppStore } from '5_shared/state/hooks';
import { useRef } from 'react';
import cls from './SectionTest.module.scss';
import { postListActions } from '../../../4_entities/Post';

interface SectionFrontIntroProps {
    className?: string;
}

export const SectionTest = (props: SectionFrontIntroProps) => {
    const { className } = props;

    // const store = useAppStore();
    // const initialized = useRef(false);
    // if (!initialized.current) {
    //     store.dispatch(postListActions.setTempName('ИГРЫ'));
    //     initialized.current = true;
    // }
    //
    const pageName = useSelector(getPostListTempName);

    return (
        <Section className={classNames(cls.block, className)}>
            <Container>
                Имя страницы:
                {' '}
                { pageName }
                <ListPost />
            </Container>
        </Section>
    );
};
