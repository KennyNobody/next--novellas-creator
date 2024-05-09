import classNames from 'classnames';
import { Editor } from '5_shared/ui/Editor/Editor';
import cls from './DetailShop.module.scss';
import { ArticleShopType } from '../../model/types/ArticleShop';

interface DetailShopProps {
    className?: string;
    data: ArticleShopType;
}

export const DetailShop = (props: DetailShopProps) => {
    const { data, className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <Editor data={data.content} />
        </div>
    );
};
