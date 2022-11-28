import { Direction } from '@/src/Direction'

export interface DirectionalPickerInterface {
  pick(
    startingPoint: HTMLElement,
    elements: HTMLElement[],
    direction: Direction,
  ): HTMLElement | undefined
}
