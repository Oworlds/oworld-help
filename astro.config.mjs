// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://help.oworld.pro',
	integrations: [
		starlight({
			title: 'OWORLD Help & Docs',
			favicon: '/favicon.svg',
			customCss: ['./src/styles/custom.css'],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Oworlds/Qhub' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/your-invite-code' },
			],
			sidebar: [
				{
					label: '🚀 Getting Started',
					items: [
						{ label: 'Platform Overview', link: '/getting-started/overview/' },
						{ label: 'Data Sovereignty & Privacy', link: '/getting-started/privacy/' },
					],
				},
				{
					label: '🔒 Google Drive Sync',
					items: [
						{ label: 'Setting Up AppData Sync', link: '/drive-sync/setup/' },
						{ label: 'Troubleshooting OAuth Errors', link: '/drive-sync/troubleshooting/' },
					],
				},
				{
					label: '🧬 Qhub & Question Banks',
					items: [
						{ label: 'Ingesting Qbank Recipes', link: '/qhub/recipes/' },
						{ label: 'Submitting Decks via Discord', link: '/qhub/contributing/' },
					],
				},
				{
					label: '👥 Modes & Features',
					items: [
						{ label: 'Group Study Mode', link: '/features/group-study/' },
						{ label: 'Creator & Shorts Mode', link: '/features/shorts-mode/' },
					],
				},
			],
		}),
	],
});
