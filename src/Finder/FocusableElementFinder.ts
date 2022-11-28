// I've created some private members for demonstration purposes:
//   1. so that the main (public) method's code communicates the purpose / big-picture logic (focusable & visible)
//      more than the implementation details (selector & client rect)
//      - but that doesn't mean the original code was bad; it was still simple, so the refactoring I made is just a matter of taste
//   2. to demonstrate a more classic OOP approach regarding the use of private members
//      - but in TS/JS they could be just module-level constants & functions, as none of them reference `this`

import { FinderInterface } from '@/src/Finder/FinderInterface'

export class FocusableElementFinder implements FinderInterface {
  private static readonly SELECTOR = 'a, button, span[tabIndex="0"]'

  findIn(container: HTMLElement) {
    return this
      .findFocusableElements(container)
      .filter(this.isVisible)
  }

  private findFocusableElements(container: HTMLElement) {
    return [...container.querySelectorAll<HTMLElement>(FocusableElementFinder.SELECTOR)]
  }

  private isVisible(element: HTMLElement) {
    const rect = element.getBoundingClientRect()

    return rect.width > 0 && rect.height > 0
  }
}
