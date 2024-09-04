// src/stores/languageStore.js
import { atom } from 'nanostores'

// Crear el store
export const languageStore = atom('en')

// Función para cambiar el idioma
export function setLanguage(newLanguage) {
  languageStore.set(newLanguage)
}

// Función para obtener el idioma actual (útil en contextos no reactivos)
export function getLanguage() {
  return languageStore.get()
}
