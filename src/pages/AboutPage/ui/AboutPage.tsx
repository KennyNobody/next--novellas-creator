import cls from './AboutPage.module.css';

const AboutPage = () => {
    return (
        <main className={cls.main}>
            <div className={cls.description}>
                <p>
                    Это страница About
                </p>
            </div>
        </main>
    );
};

export {
    AboutPage,
};
