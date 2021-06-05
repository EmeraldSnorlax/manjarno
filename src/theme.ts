export function toDark(): void {
  document.documentElement.classList.add('dark')
  localStorage.theme = 'dark'
}

export function toLight(): void {
  document.documentElement.classList.remove('dark')
  localStorage.theme = 'light'
}

export function toggle(): void {
  if (localStorage.theme === 'light') {
    toDark()
  } else {
    toLight()
  }
}
