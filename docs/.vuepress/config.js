import { defineUserConfig } from 'vuepress';
import { viteBundler } from '@vuepress/bundler-vite';
import { plumeTheme } from 'vuepress-theme-plume';
import { navbar } from '../../generateNavbar.js';
import { notes } from '../../generateSidebar.js';

export default defineUserConfig({
	lang: 'zh-CN',
	head: [
		['link', { rel: 'icon', href: 'https://plume.pengzhanbo.cn/plume.png' }],
	],
	theme: plumeTheme({
		navbar: navbar,
		notes: notes,
		// footer: {
		//     message: "",
		//   },
	}),
	bundler: viteBundler(),
});
