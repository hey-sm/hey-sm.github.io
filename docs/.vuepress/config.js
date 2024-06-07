import { defineUserConfig } from 'vuepress';
import { viteBundler } from '@vuepress/bundler-vite';
import { plumeTheme } from 'vuepress-theme-plume';
import { navbar } from '../../generateNavbar.js';
import { notes } from '../../generateSidebar.js';

export default defineUserConfig({
	lang: 'zh-CN',
	head: [
		['link', { rel: 'icon', href: 'https://plume.pengzhanbo.cn/plume.png' }],
		['link', { rel: 'stylesheet', href: '/css/index.css' }],
	],
	theme: plumeTheme({
		navbar: navbar,
		notes: notes,
		// footer: {
		//     message: "",
		//   },
	}),
	markdown: {
		// Disable Liquid
		render: {
			html: true,
			// 禁用 Liquid 处理
			options: {
				breaks: true,
				xhtmlOut: false,
				langPrefix: 'language-',
				linkify: true,
				typographer: true,
				quotes: '“”‘’',
				highlight: (str, lang) => {
					if (lang && hljs.getLanguage(lang)) {
						try {
							return hljs.highlight(lang, str).value;
						} catch (__) {}
					}

					return ''; // 使用额外的 default 高亮模式
				},
			},
			// 关闭 Liquid 语法
			disableLiquid: true,
		},
	},
	bundler: viteBundler(),
});
