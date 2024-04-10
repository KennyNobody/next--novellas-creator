import {
    mockData,
    NewsPage,
} from '1_pages/NewsPage';

export default function Page() {
    return NewsPage({
        data: mockData,
    });
}
