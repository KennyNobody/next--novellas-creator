import { LinkAppKey } from '4_entities/LinkApp';
import { ListLinksType } from '../type/ListLinks';

const data: ListLinksType = {
    title: 'Список ссылок',
    links: [
        {
            link: {
                iconKey: {
                    label: 'vk',
                    key: LinkAppKey.EMAIL,
                    value: LinkAppKey.EMAIL,
                },
                textVisible: 'видимый текст vk',
                textLink: 'текст ссылки',
            },
        },
        {
            link: {
                iconKey: {
                    label: 'tg',
                    key: LinkAppKey.EMAIL,
                    value: LinkAppKey.EMAIL,
                },
                textVisible: 'видимый текст tg',
                textLink: 'текст ссылки',
            },
        },
    ],
};

export {
    data,
};
