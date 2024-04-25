import classNames from 'classnames';
import { MainIntoType } from 'app/model/types/MainData';
import { Logo, LogoMode } from '4_entities/Logo';
import { ContactItem } from '4_entities/ContactItem';
import { Copyright } from '5_shared/ui/Copyright/Copyright';
import { Container } from '5_shared/ui/Container/Container';
import cls from './Footer.module.scss';

interface FooterProps {
    className?: string;
    data: MainIntoType;
}

export const Footer = (props: FooterProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <footer className={classNames(cls.block, className)}>
            <Container>
                {
                    data?.blockLogo
                    && (
                        <Logo
                            mode={LogoMode.LIGHT}
                            data={data?.blockLogo}
                        />
                    )
                }
                {
                    data?.companyName
                    && (
                        <Copyright text={data?.companyName} />
                    )
                }
                {
                    data?.contactsSupport
                    && (
                        <ContactItem data={data.contactsSupport} />
                    )
                }
            </Container>
        </footer>
    );
};
