import { SocialLink } from '3_features/Socials';
import { ListLinksType } from '3_features/ListLinks';
import { PictureType } from '4_entities/Picture';

interface SectionContactsType {
    coords: string;
    mapKey: string;
    picture: PictureType;
    blockLinks: ListLinksType;
    socials: {
        list: SocialLink[];
    }
}

export {
    type SectionContactsType,
};
