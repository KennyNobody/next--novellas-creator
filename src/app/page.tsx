import {
    FrontPage,
} from '1_pages/FrontPage';
import { fetchPageData } from '4_entities/Page';
import { generateMeta } from '5_shared/libs/next/generateMeta';

async function fetchData() {
    const pageData = await fetchPageData('eac91945-8b3e-44c6-99da-1a5224c5be5f');
    return pageData.data;
}

export default async function Page() {
    const data = await fetchData();

    return FrontPage(data.title);
}

const metadata = async () => {
    const data = await fetchData();
    console.log(data);
    return generateMeta(data);
};

export {
    metadata,
};
