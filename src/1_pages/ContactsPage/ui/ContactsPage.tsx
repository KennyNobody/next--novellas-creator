import classNames from 'classnames';
import { Header } from '2_widgets/Header';
import { SectionContacts } from '2_widgets/SectionContacts';
import { Main } from '5_shared/ui/Main/Main';
import cls from './ContactsPage.module.css';
import { ContactsPageType } from '../model/types/ContactsPage';

interface ContactsPageProps {
    data: ContactsPageType;
}

const ContactsPage = (props: ContactsPageProps) => {
    const { data } = props;

    return (
        <>
            <Header />
            <Main className={classNames(cls.block)}>
                {
                    data?.sectionContacts
                    && <SectionContacts data={data.sectionContacts} />
                }
            </Main>
        </>
    );
};

export {
    ContactsPage,
};
