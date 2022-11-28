import { Direction } from '@/src/common-types'
import { DirectionalFinderInterface } from '@/src/DirectionalFinder/DirectionalFinderInterface'
import { DirectionalPickerInterface } from '@/src/DirectionalPicker/DirectionalPickerInterface'
import { FinderInterface } from '@/src/Finder/FinderInterface'

// Notice that this class is very generic - it doesn't talk e.g. about focus. It can be used for whatever you want,
// depending on what `finder` and `directionalPicker` implementation you inject.
// Of course, this level of generality and abstraction is not always necessary.

export class DirectionalFinder implements DirectionalFinderInterface {
  constructor(
    private readonly finder: FinderInterface,
    private readonly directionalPicker: DirectionalPickerInterface,
  ) {
  }

  find(
    startingPoint: HTMLElement,
    container: HTMLElement,
    direction: Direction,
  ) {
    const elements = this.finder.findIn(container)

    return this.directionalPicker.pick(startingPoint, elements, direction)
  }
}
