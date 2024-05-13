'use client';

import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Controller } from 'swiper/modules';
import { Swiper as SwiperInstance } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
    getGameSlider,
    fetchGameSlider,
    ArticleGameType,
    useLazyFetchGameSlider,
} from '4_entities/Game';
import { Editor } from '5_shared/ui/Editor/Editor';
import { useAppDispatch } from '5_shared/state/hooks';
import { Title, TitleMode } from '5_shared/ui/Title/Title';
import { Container } from '5_shared/ui/Container/Container';
import { ButtonRegular, ButtonTagType } from '5_shared/ui/ButtonRegular';
import cls from './SliderGamesList.module.scss';

interface SliderGamesListProps {
    className?: string;
}

export const SliderGamesList = ({ className }: SliderGamesListProps) => {
    const dispatch = useAppDispatch();
    const [getData] = useLazyFetchGameSlider({});
    const data: ArticleGameType[] = useSelector(getGameSlider) || [];
    // const isLoading: boolean = useSelector(getGameListLoading);

    const [mainSlider, setMainSlider] = useState<SwiperInstance | null>(null);
    const [paginationSlider, setPaginationSlider] = useState<SwiperInstance | null>(null);

    const [activeIndex, setActiveIndex] = useState<number>(0);

    useEffect(() => {
        dispatch(fetchGameSlider({ getData }));
    }, []);

    useEffect(() => {
        if (mainSlider && paginationSlider) {
            mainSlider.controller.control = paginationSlider;
            paginationSlider.controller.control = mainSlider;
            setActiveIndex(0);
        }
    }, [mainSlider, paginationSlider]);

    useEffect(() => {
        if (mainSlider) {
            mainSlider?.slideTo(activeIndex);
        }
    }, [activeIndex]);

    return (
        <div className={classNames(cls.block, className)}>
            <div className={classNames(cls['slider-main'])}>
                <Swiper
                    slidesPerView={1}
                    modules={[Controller]}
                    onSwiper={setMainSlider}
                    controller={{ control: paginationSlider }}
                    onSlideChange={(swiperInstance: SwiperInstance) => setActiveIndex(swiperInstance.activeIndex)}
                >
                    {
                        data.map((item) => (
                            <SwiperSlide
                                key={item.id}
                                className={classNames(cls.slide)}
                            >
                                <Container>
                                    {
                                        item?.sectionSlider?.picturePerson?.permalink
                                        && (
                                            <picture className={classNames(cls.picture)}>
                                                <img
                                                    alt={item?.title || '#'}
                                                    src={item?.sectionSlider.picturePerson?.permalink}
                                                />
                                            </picture>
                                        )
                                    }
                                    <div className={classNames(cls['slide-content'])}>
                                        <Title
                                            tag="h2"
                                            text={item.title}
                                            mode={TitleMode.STRING}
                                            className={classNames(cls.title)}
                                        />
                                        <Editor
                                            data={item.previewCaption}
                                            className={classNames(cls.editor)}
                                        />
                                        <ButtonRegular
                                            path={`/games/${item.id}`}
                                            tag={ButtonTagType.LINK}
                                            label="Подробнее об игре"
                                            className={classNames(cls.link)}
                                        />
                                    </div>
                                </Container>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className={classNames(cls.pagination)}>
                <Container>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={5}
                        modules={[Controller]}
                        onSwiper={setPaginationSlider}
                        controller={{ control: mainSlider }}
                    >
                        {
                            data.map((item, index) => (
                                <SwiperSlide
                                    key={item.id}
                                    className={classNames(cls['slide-child'])}
                                >
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
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </Container>
            </div>
        </div>
    );
};
