import { Direction } from '@/src/Direction'
import { DirectionalFinderInterface } from '@/src/DirectionalFinder/DirectionalFinderInterface'

// I have not bothered to create a separate interface for this class,
// because we're not injecting a KeyboardEventHandler into any other constructor.

export class KeyboardEventHandler {
  private static readonly KEYS_TO_DIRECTIONS: Record<string, Direction> = {
    ArrowLeft: Direction.LEFT,
    ArrowRight: Direction.RIGHT,
    ArrowUp: Direction.UP,
    ArrowDown: Direction.DOWN,
  }

  constructor(
    private readonly finder: DirectionalFinderInterface,
  ) {
  }

  handle = (event: KeyboardEvent) => {
    const direction = KeyboardEventHandler.KEYS_TO_DIRECTIONS[event.key]

    if (!direction) {
      return
    }

    const nextElement = this.finder.find(
      event.target as HTMLElement,
      event.currentTarget as HTMLElement,
      direction,
    )

    if (!nextElement) {
      return
    }

    nextElement.focus()
  }
}
