interface BlueprintType {
    title: string;
    handle: string;
}

interface CollectionType {
    title: string;
    handle: string;
}

interface MetaLinkType {
    label: string;
    active: boolean;
    url: string | null;
}

interface MetaListType {
    current_page: number;
    from: number;
    last_page: number;
    links: MetaLinkType[];
    path: string;
    per_page: number;
    to: number;
    total: number;
}

export {
    type BlueprintType,
    type CollectionType,
    type MetaListType,
    type MetaLinkType,
};
