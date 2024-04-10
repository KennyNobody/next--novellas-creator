import {
    mockData,
    FrontPage,
} from '1_pages/FrontPage';
import {fetchData} from "../5_shared/libs/fetching/fetchingData";

// async function fetchData() {
//     const pageData = await fetchPageData('eac91945-8b3e-44c6-99da-1a5224c5be5f');
//     return pageData.data;
// }

export default async function Page() {
    const data = await fetchData();
    console.log(data);

    return FrontPage({
        data: mockData,
    });
}
