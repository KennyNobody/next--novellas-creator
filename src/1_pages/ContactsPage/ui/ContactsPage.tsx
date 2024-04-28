import classNames from 'classnames';
import { MainDataType } from 'app';
import { Footer } from '2_widgets/Footer';
import { Header } from '2_widgets/Header';
import { SectionContacts } from '2_widgets/SectionContacts';
import { Breadcrumbs } from '3_features/Breadcrumbs';
import { Main } from '5_shared/ui/Main/Main';
import { RouteSlug } from '5_shared/config/routes';
import { ContactsPageType } from '../model/types/ContactsPage';
import cls from './ContactsPage.module.css';

interface ContactsPageProps {
    pageData: ContactsPageType;
    mainData: MainDataType;
}

const ContactsPage = (props: ContactsPageProps) => {
    const {
        pageData,
        mainData,
    } = props;

    return (
        <>
            <Header
                data={mainData.sectionMainInfo}
            >
                <Breadcrumbs slug={RouteSlug.CONTACTS} />
            </Header>
            <Main className={classNames(cls.block)}>
                {
                    pageData?.sectionContacts
                    && <SectionContacts data={pageData.sectionContacts} />
                }
            </Main>
            <Footer
                data={mainData.sectionMainInfo}
            />
        </>
    );
};

export {
    ContactsPage,
};
