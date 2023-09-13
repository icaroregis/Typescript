const site: unknown = 'https://hcode.com.br';
let sitesFavoritos: string[] = [];

//afirmaçãoes se usa o "as"
sitesFavoritos.push(site as string);
sitesFavoritos.push(<string>site);
