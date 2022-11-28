import { Direction } from '@/src/common-types'

// Creating this interface is questionable because:
//   1. There is only one class implementing it.
//   2. The interface is named pretty much the same as the class, so it's not like the interface provides
//      any level of abstraction over the concrete class.
//
// It seems nice from the perspective of the dependency inversion principle (5th of SOLID),
// but I heard creating separate interfaces for everything used to be a common practice in the Java & C# worlds...
// until people realised it was a major cause of boilerplate & pain in practice.

export interface DirectionalFinderInterface {
  find(
    startingPoint: HTMLElement,
    container: HTMLElement,
    direction: Direction,
  ): HTMLElement | undefined
}
