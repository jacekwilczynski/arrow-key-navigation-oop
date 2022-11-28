import { Direction } from '@/src/common-types'
import { DirectionalPickerInterface } from '@/src/DirectionalPicker/DirectionalPickerInterface'

export class ClosestElementPicker implements DirectionalPickerInterface {
  pick(
    startingPoint: HTMLElement,
    elements: HTMLElement[],
    direction: Direction,
  ) {
    // resource-heavy computation

    return undefined
  }
}
