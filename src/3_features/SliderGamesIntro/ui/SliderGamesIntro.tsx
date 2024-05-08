'use client';

import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Swiper as SwiperInstance } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
    ArticleGameType,
    getGameIntroSlider,
    fetchGameIntroSlider,
    useLazyFetchGameIntroSlider,
} from '4_entities/Game';
import { useAppDispatch } from '5_shared/state/hooks';
import { ButtonRegular, ButtonTagType } from '5_shared/ui/ButtonRegular';
import cls from './SliderGamesIntro.module.scss';

interface SliderGamesIntroProps {
    className?: string;
}

export const SliderGamesIntro = ({ className }: SliderGamesIntroProps) => {
    const dispatch = useAppDispatch();
    const [getData] = useLazyFetchGameIntroSlider({});
    const data: ArticleGameType[] = useSelector(getGameIntroSlider) || [];
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
        dispatch(fetchGameIntroSlider({ getData }));
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
                        data.map((item) => (
                            <SwiperSlide
                                key={item.id}
                                className={classNames(cls.slide)}
                            >
                                { item.title }
                                <br />
                                <ButtonRegular
                                    path={`/games/${item.id}`}
                                    tag={ButtonTagType.LINK}
                                    label="Подробнее об игре"
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className={classNames(cls.pagination)}>
                {
                    data.map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveIndex(index)}
                            className={
                                classNames(
                                    cls.button,
                                    {
                                        [cls['button--active']]: index === activeIndex,
                                    },
                                )
                            }
                        >
                            <span className={classNames(cls['button-content'])}>
                                { item.title }
                            </span>
                        </button>
                    ))
                }
            </div>
        </div>
    );
};
