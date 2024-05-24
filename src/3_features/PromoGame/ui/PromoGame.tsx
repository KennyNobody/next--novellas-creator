'use client';

import classNames from 'classnames';
import {
    PromoGameAreaType,
    useFetchGameByArea,
} from '4_entities/Game';
import { Container } from '5_shared/ui/Container/Container';
import cls from './PromoGame.module.scss';

interface PromoGameProps {
    className?: string;
    mode: PromoGameAreaType;
}

export const PromoGame = (props: PromoGameProps) => {
    const {
        mode,
        className,
    } = props;

    const { data } = useFetchGameByArea(mode) || [];

    return (
        <section className={classNames(cls.block, className)}>
            <Container>
                <div className={classNames(cls.content)}>
                    {
                        data
                        && data?.length > 0
                        && data[0].title
                    }
                </div>
            </Container>
        </section>
    );
};
