import { Direction } from '@/src/Direction'
import { DirectionalPickerInterface } from '@/src/DirectionalPicker/DirectionalPickerInterface'

// This class looks like a decorator. It's not a "true" decorator, because a decorator should, as a rule,
// always call the decorated instance (but can add extra stuff before and after the call). Well, who cares ^^

export class ComputationAvoidantElementPicker implements DirectionalPickerInterface {
  constructor(
    private readonly inner: DirectionalPickerInterface,
  ) {
  }

  pick(
    startingPoint: HTMLElement,
    elements: HTMLElement[],
    direction: Direction,
  ) {
    if (elements.length <= 1) {
      return elements[0]
    }

    return this.inner.pick(startingPoint, elements, direction)
  }
}
