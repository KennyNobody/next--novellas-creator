import classNames from 'classnames';
import { Main } from '@/5_shared/ui/Main/Main';
import { Container } from '@/5_shared/ui/Container/Container';
import cls from './ShopPage.module.css';

const ShopPage = () => (
    <Main className={classNames(cls.block)}>
        <Container>
            <div className={classNames(cls.description)}>
                <p>
                    Это страница Покупки
                </p>
            </div>
        </Container>
    </Main>
);

export {
    ShopPage,
};
