import classNames from 'classnames';
import { MainDataType } from 'app';
import { Header } from '2_widgets/Header';
import { Footer } from '2_widgets/Footer';
import { Breadcrumbs } from '3_features/Breadcrumbs';
import {
    DetailGame,
    ArticleGameType,
} from '4_entities/Game';
import {
    Section,
    SectionTagType,
    SectionThemeMode,
    SectionDecorType,
} from '5_shared/ui/Section/Section';
import { Main } from '5_shared/ui/Main/Main';
import { RouteSlug } from '5_shared/config/routes';
import { Container } from '5_shared/ui/Container/Container';
import cls from './GameDetailPage.module.scss';

interface GameDetailPageProps {
    pageData: ArticleGameType;
    mainData: MainDataType;
}

const GameDetailPage = (props: GameDetailPageProps) => {
    const {
        pageData,
        mainData,
    } = props;

    console.log(pageData);

    return (
        <>
            <Header
                data={mainData.sectionMainInfo}
            >
                <Breadcrumbs
                    slug={RouteSlug.GAMES}
                    title={pageData?.title}
                />
            </Header>
            <Main className={classNames(cls.block)}>
                <Section
                    tag={SectionTagType.SECTION}
                    theme={SectionThemeMode.LiGHT}
                    decor={SectionDecorType.BOTTOM}
                >
                    <Container>
                        {
                            pageData && <DetailGame data={pageData} />
                        }
                    </Container>
                </Section>
            </Main>
            <Footer
                data={mainData.sectionMainInfo}
            />
        </>
    );
};

export {
    GameDetailPage,
};
