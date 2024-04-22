import { PictureType } from '5_shared/types/statamic';

interface DetailPostType {
    title: string;
    content: string;
    preview: PictureType;
    previewCaption: string;
}

export {
    type DetailPostType,
};
