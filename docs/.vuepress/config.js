import { defineUserConfig } from 'vuepress';
import { viteBundler } from '@vuepress/bundler-vite';
import { plumeTheme } from 'vuepress-theme-plume';
import { navbar } from '../../generateNavbar.mjs';
import { notes } from '../../generateSidebar.mjs';
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
		plugins: {
			markdownPower: {
				// 默认不启用任何功能，你需要手动开启它们
				// pdf: true, // @[pdf](url)  嵌入 PDF 文件
				// icons: true, // :[collect:name]:   内联 iconify 图标
				// bilibili: true, // @[bilibili](bvid)  嵌入 bilibili 视频
				// youtube: true, // @[youtube](id)  嵌入 youtube 视频
				// codepen: true, // @[codepen](user/slash)  嵌入 codepen
				// replit: true, // @[replit](user/repl-name)  嵌入 Replit
				// codeSandbox: true, // @[codesandbox](id)  嵌入 CodeSandbox
				// jsfiddle: true, // @[jsfiddle](id)  嵌入 jsfiddle
				// caniuse: true, // @[caniuse](feature)  嵌入 caniuse
				// repl: true, // :::go-repl   :::kotlin-repl  :::rust-repl
				// plot: true, // !!plot!! 隐秘文本
				// fileTree: true, // :::file-tree  文件树容器

				imageSize: 'all', // 在构建阶段为 图片添加 width/height 属性
			},
		},
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
