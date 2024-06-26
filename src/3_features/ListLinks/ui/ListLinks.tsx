import classNames from 'classnames';
import {LinkApp} from '4_entities/LinkApp';
import cls from './ListLinks.module.scss';
import {ListLinksType} from '../model/type/ListLinks';
import {SocialLink, Socials} from "../../Socials";
import {SocialsMode} from "../../Socials/ui/Socials";

interface ListLinksProps {
    className?: string;
    data: ListLinksType;
    links: SocialLink[];
}

export const ListLinks = (props: ListLinksProps) => {
    const {
        data,
        links,
        className,
    } = props;

    return (
        <div className={classNames(cls.block, className)}>
            {
                data?.title
                && (
                    <h3
                        className={
                            classNames(cls.title)
                        }
                    >
                        { data.title }
                    </h3>
                )
            }
            <div className={classNames(cls.list)}>
                {
                    data.links.map((item, index) => (
                        <LinkApp data={item.link} key={index} />
                    ))
                }
            </div>
            {
                links
                && (
                    <Socials
                        data={links}
                        mode={SocialsMode.PAGE}
                    />
                )
            }
        </div>
    );
};
