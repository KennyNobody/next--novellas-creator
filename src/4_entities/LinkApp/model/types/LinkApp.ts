enum LinkAppKey {
    TIME = 'time',
    EMAIL = 'email',
    PHONE = 'phone',
    MARKER = 'marker',
}

interface LinkAppType {
    iconKey: {
        label: string;
        key: LinkAppKey;
        value: LinkAppKey;
    };
    textVisible: string;
    textLink: string | null;
}

export {
    LinkAppKey,
    type LinkAppType,
};
