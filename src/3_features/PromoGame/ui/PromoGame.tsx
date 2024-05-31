'use client';

import classNames from 'classnames';
import {PromoGameAreaType, useFetchGameByArea,} from '4_entities/Game';
import {Container} from '5_shared/ui/Container/Container';
import cls from './PromoGame.module.scss';
import {Editor, EditorMode} from "../../../5_shared/ui/Editor/Editor";
import {PlatformList} from "../../../4_entities/Platform";
import {ButtonRegular, ButtonTagType} from "../../../5_shared/ui/ButtonRegular";
import Link from "next/link";

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

    if (!data || data.length <= 0) return null;

    return (
        <section className={classNames(cls.block, className)}>
            <div
                className={classNames(cls.wrapper)}
                style={{
                    backgroundImage: `url(${data[0].previewPromo.permalink})`,
                }}
            >
                <Container>
                    <div className={classNames(cls.content)}>
                        <h2 className={classNames(cls.title)}>
                            { data[0].title }
                        </h2>
                        <Editor
                            mode={EditorMode.INVERTED}
                            data={data[0].previewCaption}
                            className={classNames(cls.editor)}
                        />
                        <PlatformList
                            data={data[0].platform}
                            className={classNames(cls.platforms)}
                        />
                        <img
                            alt={data[0].title}
                            className={classNames(cls.image)}
                            src={data[0].previewPromo.permalink}
                        />
                        <div className={classNames(cls.toolbar)}>
                            <ButtonRegular
                                label="Подробнее"
                                tag={ButtonTagType.LINK}
                                path={`/games/${data[0].id}`}
                                className={classNames(cls.button)}
                            />
                            <Link
                                href="./games/"
                                className={classNames(cls.link)}
                            >
                                Ко всем играм
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
};
