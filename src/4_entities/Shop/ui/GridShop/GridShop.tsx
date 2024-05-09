import classNames from 'classnames';
import grid from '5_shared/styles/grid.module.scss';
import cls from './GridShop.module.scss';
import { ArticleShop } from '../ArticleShop/ArticleShop';
import { ArticleShopType } from '../../model/types/ArticleShop';

interface GridShopProps {
    className?: string;
    data?: ArticleShopType[];
}

export const GridShop = (props: GridShopProps) => {
    const {
        data,
        className,
    } = props;

    const content = (
        data
        && data?.length > 0
        && data.map((item: ArticleShopType) => (
            <div
                key={item.id}
                className={
                    classNames(grid['grid__col--4'])
                }
            >
                <ArticleShop data={item} />
            </div>
        ))
    );

    return (
        <div className={classNames(cls.block)}>
            <div className={classNames(grid.grid, cls.grid, className)}>
                { content }
            </div>
        </div>
    );
};
