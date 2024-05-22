'use client';

import { useState } from 'react';
import classNames from 'classnames';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    LinkTax,
    useFetchTeamTaxListQuery,
} from '4_entities/Tax';
import {
    ArticlePerson,
    useFetchPersonList,
} from '4_entities/Person';
import { Container } from '5_shared/ui/Container/Container';
import cls from './TeamTabs.module.scss';

interface TeamTabsProps {
    className?: string
}

export const TeamTabs = (props: TeamTabsProps) => {
    const { className } = props;
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const {
        data: taxData = [],
    } = useFetchTeamTaxListQuery(null);

    const {
        data: teamData = [],
    } = useFetchPersonList(taxData?.[activeIndex]?.slug || '#');

    const el = (
        <div className={classNames(cls.block, className)}>
            <Container>
                <nav
                    className={classNames(cls.nav)}
                >
                    <div className={classNames(cls.blur)} />
                    <div className={classNames(cls.links)}>
                        {
                            taxData?.map((item, index) => (
                                <LinkTax
                                    data={item}
                                    key={item.id}
                                    isActive={index === activeIndex}
                                    clickEvent={() => setActiveIndex(index)}
                                />
                            ))
                        }
                    </div>
                </nav>
            </Container>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                    bulletClass: classNames(cls.bullet),
                    verticalClass: classNames(cls.pagination),
                    bulletActiveClass: classNames(cls['bullet--active']),
                }}
                modules={[Pagination]}
                direction="vertical"
                className={classNames(cls.swiper)}
            >
                {
                    teamData?.map((item) => (
                        <SwiperSlide
                            key={item.id}
                            className={
                                classNames(
                                    cls.slide,
                                )
                            }
                        >
                            <Container>
                                <ArticlePerson
                                    data={item}
                                />
                            </Container>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );

    return teamData ? el : 'Загрузка...';
};
