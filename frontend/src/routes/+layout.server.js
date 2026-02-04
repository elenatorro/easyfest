import { fetchSingle } from '../services/api';
import { getUserCard } from '../services/users';

export async function load({cookies}) {
    let data = {}
	const [settingsEntry, siteEntry, seoEntry] = await Promise.all([
        fetchSingle("/setting?populate=*", cookies),
        fetchSingle("/site", cookies),
        fetchSingle("/seo?populate=*", cookies)
    ]);
    const userCard = getUserCard(cookies);
    if (settingsEntry || siteEntry || seoEntry) {
        data = {...settingsEntry, ...siteEntry, ...seoEntry, ...userCard}
    }
    return data;
}
