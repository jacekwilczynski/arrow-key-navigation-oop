import { Direction } from '@/src/common-types'

export interface DirectionalPickerInterface {
  pick(
    startingPoint: HTMLElement,
    elements: HTMLElement[],
    direction: Direction,
  ): HTMLElement | undefined
}
