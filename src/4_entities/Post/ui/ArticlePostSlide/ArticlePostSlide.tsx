import Image from 'next/image';
import classNames from 'classnames';
import grid from '5_shared/styles/grid.module.scss';
import { Title, TitleMode } from '5_shared/ui/Title/Title';
import { Container } from '5_shared/ui/Container/Container';
import { Editor, EditorMode } from '5_shared/ui/Editor/Editor';
import { ButtonRegular, ButtonTagType } from '5_shared/ui/ButtonRegular';
import cls from './ArticlePostSlide.module.scss';
import { ArticlePostType } from '../../model/types/ArticlePost';

interface ArticlePostSlideProps {
    className?: string;
    data: ArticlePostType;
}

export const ArticlePostSlide = (props: ArticlePostSlideProps) => {
    const {
        data,
        className,
    } = props;

    const title = data?.introSlider?.title;
    const content = data?.introSlider?.content;
    const image = data?.introSlider?.image?.permalink;
    const imgBg = data?.introSlider?.background?.permalink;

    return (
        <div className={classNames(cls.block, className)}>
            {
                imgBg
                && (
                    <Image
                        width={900}
                        src={imgBg}
                        height={1920}
                        alt={data.title}
                        className={classNames(cls.bg)}
                    />
                )
            }
            <Container className={classNames(cls.container)}>
                <div className={classNames(grid.grid, cls.grid)}>
                    <div
                        className={
                            classNames(
                                grid.grid__col,
                                grid['grid__col--5'],
                                cls['column-content'],
                            )
                        }
                    >
                        <div className={classNames(cls.content)}>
                            {
                                title
                                && (
                                    <Title
                                        tag="h3"
                                        text={title}
                                        mode={TitleMode.MARKUP}
                                        className={classNames(cls.title)}
                                    />
                                )
                            }
                            {
                                content
                                && (
                                    <Editor
                                        data={content}
                                        mode={EditorMode.REGULAR}
                                        className={classNames(cls.editor)}
                                    />
                                )
                            }
                            <ButtonRegular
                                label="Подробнее"
                                tag={ButtonTagType.LINK}
                                className={classNames(cls['button-desktop'])}
                            />
                        </div>
                    </div>
                    {
                        image
                        && (
                            <div
                                className={
                                    classNames(
                                        grid.grid__col,
                                        grid['grid__col--7'],
                                        cls['column-picture'],
                                    )
                                }
                            >
                                <picture className={classNames(cls.picture)}>
                                    <Image
                                        width={475}
                                        src={image}
                                        height={670}
                                        alt={data.title}
                                        className={classNames(cls.img)}
                                    />
                                </picture>
                            </div>
                        )
                    }
                    <ButtonRegular
                        label="Подробнее"
                        tag={ButtonTagType.LINK}
                        className={classNames(cls['button-mobile'])}
                    />
                </div>
            </Container>
        </div>
    );
};
