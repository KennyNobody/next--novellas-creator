import classNames from 'classnames';
import { MapFrame } from '3_features/MapFrame';
import { ListLinks } from '3_features/ListLinks';
import { Section } from '5_shared/ui/Section/Section';
import { Container } from '5_shared/ui/Container/Container';
import cls from './SectionContacts.module.scss';
import { SectionContactsType } from '../model/types/SectionContacts';
import {Picture} from "../../../5_shared/ui/Picture/Picture";

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
        <Section className={classNames(cls.SectionContacts, className)}>
            <Container>
                {
                    data?.blockLinks
                    && (
                        <ListLinks data={data.blockLinks} />
                    )
                }
                {
                    data?.mapFrame?.value
                    && <MapFrame className={classNames(cls.map)} data={data.mapFrame.value} />
                }
                {
                    data?.picture && <Picture data={data.picture} />
                }
            </Container>
        </Section>
    );
};
