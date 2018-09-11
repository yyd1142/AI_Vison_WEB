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