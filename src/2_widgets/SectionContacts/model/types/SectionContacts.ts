import { ListLinksType } from '3_features/ListLinks';
import { PictureType } from '4_entities/Picture';
import { HTMLType } from '5_shared/types/statamic/BaseFieldTypes';

interface SectionContactsType {
    mapFrame: HTMLType;
    picture: PictureType;
    blockLinks: ListLinksType;
}

export {
    type SectionContactsType,
};
