export const titleLanguageFilter = (item, language) => {
    let title = item.titleEN;;
    if (language === 'hk') {
        title = item.titleZH;
    } else if (language === 'cn') {
        title = item.titleCN;
    } else {
        title = item.titleEN;
    }
    return title;
}

export const dateDifference = (startDate, endDate) => {
    const total = (endDate.getTime() - startDate.getTime()) / 1000;
    const dayCount = parseInt(total / (24 * 60 * 60));
    return dayCount;
}