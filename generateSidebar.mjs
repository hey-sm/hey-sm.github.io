import { readdirSync, statSync } from 'fs';
import { join, extname, basename } from 'path';

function generateNotes(fullPath, relativePath = '') {
	const notes = [];
	const items = readdirSync(fullPath);

	items.forEach((item) => {
		const itemFullPath = join(fullPath, item);
		const itemRelativePath = join(relativePath, item);
		const stats = statSync(itemFullPath);

		if (stats.isDirectory()) {
			const children = generateNotes(itemFullPath, itemRelativePath);
			const mdFiles = children.filter((child) => typeof child === 'string');
			if (mdFiles.length > 0) {
				notes.push({
					dir: itemRelativePath.replace(/\\/g, '/'),
					link: '/notes/' + itemRelativePath.replace(/\\/g, '/') + '/',
					sidebar: [
						{
							text: basename(item),
							collapsed: true,
							items: mdFiles,
						},
					],
				});
			}
			const directories = children.filter((child) => typeof child === 'object');
			notes.push(...directories);
		} else if (stats.isFile() && extname(item) === '.md') {
			notes.push(basename(item, '.md'));
		}
	});

	return notes;
}

const notes = {
	dir: '/notes',
	link: '/',
	notes: generateNotes('./docs/notes'),
};

export { notes };
console.log(JSON.stringify(notes, null, 2));
