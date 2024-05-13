enum IconKey {
    X = 'x',
    TG = 'tg',
    VK = 'vk',
    INST = 'inst',
}

interface SocialLink {
    id: string;
    link: string;
    icon: {
        label: string;
        key: IconKey;
    }
}

export {
    IconKey,
    type SocialLink,
};
