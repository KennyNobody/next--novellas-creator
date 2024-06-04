import classNames from 'classnames';
import { Editor, EditorMode } from '5_shared/ui/Editor/Editor';
import { calculateDiscount } from '5_shared/libs/helpers/calcDiscount';
import { ButtonRegular, ButtonTagType } from '5_shared/ui/ButtonRegular';
import cls from './DetailShop.module.scss';
import { Picture } from '../../../Picture';
import { ArticleShopType } from '../../model/types/ArticleShop';

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
                    <div className={classNames(cls.prices)}>

                        {
                            data.priceOld && data.price
                            && (
                                <>
                                    <span className={classNames(cls.oldPrice)}>
                                        { `${data.priceOld} ₽` }
                                    </span>
                                    <span className={classNames(cls.discount)}>
                                        { `- ${calculateDiscount(data.priceOld, data.price)}% `}
                                    </span>
                                </>
                            )
                        }
                        <span className={classNames(cls.price)}>
                            { `${data.price} ₽` }
                        </span>
                    </div>

                    <ButtonRegular
                        label="Купить"
                        tag={ButtonTagType.LINK}
                        className={classNames(cls.button)}
                    />
                </div>
            </div>
            <Editor
                data={data.content}
                mode={EditorMode.REGULAR}
            />
        </div>
    );
};
