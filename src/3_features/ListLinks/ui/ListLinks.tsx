import classNames from 'classnames';
import cls from './ListLinks.module.scss';
import { ListLinksType } from '../model/type/ListLinks';
import {LinkApp} from "../../../4_entities/LinkApp";

interface ListLinksProps {
    className?: string;
    data: ListLinksType;
}

export const ListLinks = (props: ListLinksProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <div className={classNames(cls.block, className)}>
            {
                data?.title && <p>{ data.title }</p>
            }
            {
                data.links.map((item, index) => (
                    <LinkApp data={item.link} key={index} />
                ))
            }
        </div>
    );
};
