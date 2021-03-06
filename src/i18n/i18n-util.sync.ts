// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */

import { initFormatters } from './formatters'
import type { Locales, Translations } from './i18n-types'
import { loadedFormatters, loadedLocales, locales } from './i18n-util'

import de from './de'
import en from './en'

import de_aboutpage from './de/aboutpage'
import en_aboutpage from './en/aboutpage'

const localeTranslations = {
	de: {
		...de,
		aboutpage: de_aboutpage
	},
	en: {
		...en,
		aboutpage: en_aboutpage
	},
}

export const loadLocale = (locale: Locales): void => {
	if (loadedLocales[locale]) return

	loadedLocales[locale] = localeTranslations[locale] as unknown as Translations
	loadFormatters(locale)
}

export const loadAllLocales = (): void => locales.forEach(loadLocale)

export const loadFormatters = (locale: Locales): void => {
	loadedFormatters[locale] = initFormatters(locale)
}
