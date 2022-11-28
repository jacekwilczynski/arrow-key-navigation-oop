import { keyboardEventHandler } from '@/src/services'

document
  .querySelectorAll<HTMLElement>('[data-arrow-key-navigation-container]')
  .forEach(container => {
    container.addEventListener('keydown', keyboardEventHandler.handle)
  })
