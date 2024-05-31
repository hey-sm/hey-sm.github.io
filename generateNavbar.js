import { readdirSync, statSync } from 'fs';
import { join, extname, basename } from 'path';

function generateNavbar(dir, basePath = '') {
	const navbar = [];
	const files = readdirSync(dir);

	files.forEach((file) => {
		const fullPath = join(dir, file);
		const relativePath = join(basePath, file);
		const stats = statSync(fullPath);

		if (stats.isDirectory()) {
			const children = generateNavbar(fullPath, relativePath);
			if (children.length > 0) {
				if (children[0].link) {
					navbar.push({
						text: file,
						link: children[0].link,
					});
				} else {
					navbar.push({
						text: file,
						items: children,
					});
				}
			}
		} else if (stats.isFile() && extname(file) === '.md') {
			const text = basename(file, '.md');
			const link = '/notes/' + relativePath.replace(/\\/g, '/');
			navbar.push({ text, link });
		}
	});

	return navbar;
}

const navbarList = [
	{
		text: 'Home',
		link: '/',
		icon: 'material-symbols:home-outline',
	},
	{
		text: 'Re-learning',
		activeMatch: '^/notes/Re-learning/',
		icon: 'material-symbols:article-outline',
		items: generateNavbar('./docs/notes/Re-learning', 'Re-learning'),
	},
	{
		text: 'books',
		activeMatch: '^/notes/books/',
		items: generateNavbar('./docs/notes/books', 'books'),
	},
];

const navbar = JSON.parse(JSON.stringify(navbarList));

export { navbar };

// console.log(JSON.stringify(navbar, null, 2));
