import { LinkAppType } from '4_entities/LinkApp';

interface LinkRepeatObject {
    link: LinkAppType;
}

interface ListLinksType {
    title: string;
    links: LinkRepeatObject[];
}

export {
    type ListLinksType,
};
