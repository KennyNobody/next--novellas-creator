import classNames from 'classnames';
import {Editor, EditorMode} from '5_shared/ui/Editor/Editor';
import cls from './DetailShop.module.scss';
import { ArticleShopType } from '../../model/types/ArticleShop';
import {Picture} from '../../../Picture';

interface DetailShopProps {
    className?: string;
    data: ArticleShopType;
}

export const DetailShop = (props: DetailShopProps) => {
    const { data, className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <div className={classNames(cls.columns)}>
                <picture className={classNames(cls.picture)}>
                    {
                        data.picturePreview
                        && (
                            <Picture data={data?.picturePreview} />
                        )
                    }
                </picture>
                <div className={classNames(cls.info)}>
                    <h1 className={classNames(cls.title)}>
                        { data.title }
                    </h1>
                </div>
            </div>
            <Editor
                data={data.content}
                mode={EditorMode.REGULAR}
            />
        </div>
    );
};
