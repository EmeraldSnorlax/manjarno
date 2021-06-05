import * as theme from './theme';

window.addEventListener('load', () => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    theme.toDark()
  } else {
    theme.toLight()
  }

  document.getElementById('toggle-theme')!.addEventListener('click', theme.toggle)
})
