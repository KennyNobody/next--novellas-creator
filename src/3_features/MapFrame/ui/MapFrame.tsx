'use client';

import classNames from 'classnames';
import { useEffect, useRef } from 'react';
import { useYMaps, YMaps } from '@pbe/react-yandex-maps';
import cls from './MapFrame.module.scss';

interface MapFrameProps {
    data: string;
    mapKey: string;
    // eslint-disable-next-line react/no-unused-prop-types
    className?: string;
}

export const MapContent = (props: MapFrameProps) => {
    const { data, mapKey, className } = props;

    const mapRef = useRef(null);
    const ymaps = useYMaps(['Map', 'Placemark']);
    const coords: number[] = JSON.parse(data);

    useEffect(() => {
        if (!ymaps || !mapRef.current) {
            return;
        }

        // eslint-disable-next-line no-new
        const map = new ymaps.Map(mapRef.current, {
            center: coords,
            zoom: 15,
        });
        // eslint-disable-next-line no-new
        const placemark = new ymaps.Placemark(
            coords,
            {},
            {
                preset: 'islands#dotIcon',
                iconColor: '#2D1CA3',
            },
        );

        map.geoObjects.add(placemark);
    }, [ymaps, data, mapKey]);

    return <div ref={mapRef} className={classNames(className)} />;
};

export const MapFrame = (props: MapFrameProps) => {
    const {
        data,
        mapKey,
        className,
    } = props;

    return (
        <YMaps query={{ apikey: mapKey }}>
            <MapContent
                data={data}
                mapKey={mapKey}
                className={classNames(cls.block, className)}
            />
        </YMaps>
    );
};
