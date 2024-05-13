const setDate = (timeStamp: Date | undefined, lang: string): string => {
    if (!timeStamp) return '';

    const date = new Date(timeStamp);
    if (Number.isNaN(date.getTime())) return '';

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    const formattedString = date.toLocaleDateString(lang, options);
    return lang === 'ru' ? formattedString.slice(0, -3) : formattedString;
};

export {
    setDate,
};
