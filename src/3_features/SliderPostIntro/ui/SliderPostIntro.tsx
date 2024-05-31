'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Swiper as SwiperInstance } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    ArticlePostType,
    getPostSlider,
    fetchPostSlider,
    useLazyFetchPostSlider, ArticlePostSlide,
} from '4_entities/Post';
import { useAppDispatch } from '5_shared/state/hooks';
import cls from './SliderPostIntro.module.scss';

interface SliderPostIntroProps {
    className?: string;
}

export const SliderPostIntro = ({ className }: SliderPostIntroProps) => {
    const dispatch = useAppDispatch();
    const [getData] = useLazyFetchPostSlider({});
    const data: ArticlePostType[] = useSelector(getPostSlider) || [];
    // const isLoading: boolean = useSelector(getGameIntroSliderLoading);

    const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const initSwiper = (instance: SwiperInstance) => {
        if (instance) {
            setSwiper(instance);
            setActiveIndex(0);
        }
    };

    useEffect(() => {
        dispatch(fetchPostSlider({ getData }));
    }, []);

    useEffect(() => {
        if (swiper) {
            swiper?.slideTo(activeIndex);
        }
    }, [activeIndex]);

    return (
        <div className={classNames(cls.block, className)}>
            <div className={classNames(cls['slider-main'])}>
                <Swiper
                    slidesPerView={1}
                    onSlideChange={(swiperInstance: SwiperInstance) => setActiveIndex(swiperInstance.activeIndex)}
                    onSwiper={(swiperInstance: SwiperInstance) => initSwiper(swiperInstance)}
                >
                    {
                        data.map((item: ArticlePostType) => (
                            <SwiperSlide
                                key={item.id}
                                className={classNames(cls.slide)}
                            >
                                <ArticlePostSlide data={item} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};
