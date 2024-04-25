import classNames from 'classnames';
import { Footer } from '2_widgets/Footer';
import { Header } from '2_widgets/Header';
import { SectionContacts } from '2_widgets/SectionContacts';
import { Main } from '5_shared/ui/Main/Main';
import cls from './ContactsPage.module.css';
import { ContactsPageType } from '../model/types/ContactsPage';
import { MainDataType } from '../../../app/model/types/MainData';

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
            />
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
