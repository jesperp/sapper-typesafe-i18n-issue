<script lang="ts" context="module">
	import { loadFormatters, loadLocaleAsync } from '../i18n/i18n-util.async'
	import { loadedLocales } from '../i18n/i18n-util'

	export async function preload(page, session) {
		const locale = session.locale  // Note: Change locale in server.ts
		await loadLocaleAsync(locale)

		// access the loaded translations and send it as a prop to the layout
		const translations = loadedLocales[session.locale]

		return { locale, translations }
	}
</script>

<script lang="ts">
	import Nav from '../components/Nav.svelte';
	import LL, { setLocale } from '../i18n/i18n-svelte'
	import type { Locales, Translation } from '../i18n/i18n-types'

	export let locale: Locales
	export let translations: Translation
	export let segment: string;

	// restore the translations from the received props
	loadedLocales[locale] = translations
	loadFormatters(locale)

	setLocale(locale)

</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<h1>{$LL.HI({name: 'Jane'})}</h1>
	<slot></slot>
</main>
