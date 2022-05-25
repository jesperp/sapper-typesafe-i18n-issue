<script lang="ts" context="module">
	import { loadNamespaceAsync } from '../i18n/i18n-util.async'
	import { loadedLocales } from '../i18n/i18n-util'

	export async function preload(page, session) {
		const locale = session.locale

		const namespace = "aboutpage"
		await loadNamespaceAsync(locale, namespace)

		const translations = loadedLocales[locale]

		return { locale, translations }
	}
</script>

<script lang="ts">
	import LL, { setLocale } from '../i18n/i18n-svelte'
	import type { Locales, Translation } from '../i18n/i18n-types'

	export let locale: Locales
	export let translations: Translation

	loadedLocales[locale] = translations
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<p>{$LL.aboutpage.DESCRIPTION()}</p>
