import classNames from 'classnames';
import { MapFrame } from '3_features/MapFrame';
import { ListLinks } from '3_features/ListLinks';
import { Picture } from '4_entities/Picture';
import { Section, SectionThemeMode } from '5_shared/ui/Section/Section';
import { Container } from '5_shared/ui/Container/Container';
import cls from './SectionContacts.module.scss';
import { SectionContactsType } from '../model/types/SectionContacts';

interface SectionContactsProps {
    className?: string;
    data: SectionContactsType;
}

export const SectionContacts = (props: SectionContactsProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <Section
            theme={SectionThemeMode.LiGHT}
            className={classNames(cls.block, className)}
        >
            <Container>
                <div className={classNames(cls.block)}>
                    <div className={classNames(cls.content)}>
                        {
                            data?.blockLinks
                            && (
                                <ListLinks
                                    data={data.blockLinks}
                                    links={data.socials.list}
                                    className={classNames(cls.info)}
                                />
                            )
                        }
                        {
                            data?.picture
                            && (
                                <Picture
                                    data={data.picture}
                                    className={
                                        classNames(
                                            cls.picture,
                                            cls['picture--desktop'],
                                        )
                                    }
                                />
                            )
                        }
                    </div>
                    {
                        data?.coords
                        && (
                            <MapFrame
                                data={data.coords}
                                mapKey={data.mapKey}
                                className={classNames(cls.map)}
                            />
                        )
                    }
                    {
                        data?.picture
                        && (
                            <Picture
                                data={data.picture}
                                className={
                                    classNames(
                                        cls.picture,
                                        cls['picture--mobile'],
                                    )
                                }
                            />
                        )
                    }
                </div>
            </Container>
        </Section>
    );
};
