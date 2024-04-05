import {
    FrontPage,
} from '1_pages/FrontPage';
import { fetchPageData } from '4_entities/Page';
import { generateMeta } from '5_shared/libs/next/generateMeta';
import {useAppStore} from "../5_shared/state/hooks";
import {useRef} from "react";
import {postListActions} from "../4_entities/Post";

async function fetchData() {
    const pageData = await fetchPageData('eac91945-8b3e-44c6-99da-1a5224c5be5f');
    return pageData.data;
}

export default async function Page() {
    // const data = await fetchData();

    return FrontPage('Заголовок');
}

// const metadata = async () => {
//     const data = await fetchData();
//     console.log(data);
//     return generateMeta(data);
// };

// export {
//     metadata,
// };
