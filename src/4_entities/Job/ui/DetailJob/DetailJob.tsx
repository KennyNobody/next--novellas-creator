import Image from 'next/image';
import classNames from 'classnames';
import { Editor, EditorMode } from '5_shared/ui/Editor/Editor';
import grid from '5_shared/styles/grid.module.scss';
import { Container } from '5_shared/ui/Container/Container';
import cls from './DetailJob.module.scss';
import { ArticleJobType } from '../../model/types/ArticleJob';

interface DetailJobProps {
    className?: string;
    data: ArticleJobType;
}

export const DetailJob = (props: DetailJobProps) => {
    const { data, className } = props;

    return (
        <>
            <div className={classNames(cls.header)}>
                {
                    data?.preview_page.permalink
                    && (
                        <div className={classNames(cls.overlay)}>
                            <picture className={classNames(cls.bg)}>
                                <Image
                                    height={585}
                                    width={1920}
                                    alt="Фоновое изображение"
                                    src={data?.preview_page.permalink}
                                />
                            </picture>
                        </div>
                    )
                }
                <Container className={classNames(cls.container)}>
                    {
                        data?.department_vacancy?.[0]?.title
                        && (
                            <p className={classNames(cls.department)}>
                                { data.department_vacancy?.[0]?.title }
                            </p>
                        )
                    }
                    <h1 className={classNames(cls.title)}>
                        { data.title }
                    </h1>
                    {
                        data?.preview_page?.permalink
                        && (
                            <picture className={classNames(cls.picture)}>
                                <img src={data.preview_page.permalink} alt={data?.title || '#'} />
                            </picture>
                        )
                    }

                </Container>
            </div>
            <div className={classNames(cls.block, className)}>
                <Container>
                    <div className={grid.grid}>
                        <div className={
                            classNames(
                                grid['grid__col--3'],
                                grid['grid__col-mob--4'],
                            )
                        }
                        >
                            {
                                data?.department_vacancy?.[0]?.title
                                && (
                                    <div className={classNames(cls.item)}>
                                        <p className={classNames(cls['item-title'])}>
                                            Отделение
                                        </p>
                                        <Editor
                                            mode={EditorMode.REGULAR}
                                            data={data.department_vacancy[0].title}
                                            className={classNames(cls['item-content'])}
                                        />
                                    </div>
                                )
                            }
                            {
                                data?.mestonakhozhdenie?.[0]?.title
                                && (
                                    <div className={classNames(cls.item)}>
                                        <p className={classNames(cls['item-title'])}>
                                            Расположение
                                        </p>
                                        <Editor
                                            mode={EditorMode.REGULAR}
                                            data={data.mestonakhozhdenie[0].title}
                                            className={classNames(cls['item-content'])}
                                        />
                                    </div>
                                )
                            }

                            {
                                data?.request_id
                                && (
                                    <div className={classNames(cls.item)}>
                                        <p className={classNames(cls['item-title'])}>
                                            Идентификатор заявки
                                        </p>
                                        <Editor
                                            data={data.request_id}
                                            mode={EditorMode.REGULAR}
                                            className={classNames(cls['item-content'])}
                                        />
                                    </div>
                                )
                            }
                        </div>
                        <div className={classNames(grid['grid__col--1'])} />
                        <div
                            className={
                                classNames(
                                    grid['grid__col--8'],
                                    grid['grid__col-mob--4'],
                                )
                            }
                        >
                            {
                                data?.content
                                && (
                                    <Editor
                                        data={data.content}
                                        mode={EditorMode.REGULAR}
                                    />
                                )
                            }

                        </div>
                    </div>
                </Container>
            </div>
        </>

    );
};
