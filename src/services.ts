import { DirectionalFinder } from '@/src/DirectionalFinder/DirectionalFinder'
import { DirectionalFinderInterface } from '@/src/DirectionalFinder/DirectionalFinderInterface'
import { ClosestElementPicker } from '@/src/DirectionalPicker/ClosestElementPicker'
import { ComputationAvoidantElementPicker } from '@/src/DirectionalPicker/ComputationAvoidantElementPicker'
import { DirectionalPickerInterface } from '@/src/DirectionalPicker/DirectionalPickerInterface'
import { FinderInterface } from '@/src/Finder/FinderInterface'
import { FocusableElementFinder } from '@/src/Finder/FocusableElementFinder'
import { KeyboardEventHandler } from '@/src/KeyboardEventHandler'

// This file is a hand-made equivalent of a dependency injection container with configuration.
// It defines "services", e.g. pre-made objects ready to be used in various places in code.
//
// Only one service is public (exported) because only that services is directly imported from here.
//
// Most services are typed by interfaces, because if they were to be exported, the code using them
// should preferably not care which implementation (class) it's got (as per the dependency inversion principle).

const finder: FinderInterface = new FocusableElementFinder()

const directionalPicker: DirectionalPickerInterface = new ComputationAvoidantElementPicker(
  new ClosestElementPicker(),
)

const directionalFinder: DirectionalFinderInterface = new DirectionalFinder(
  finder,
  directionalPicker,
)

export const keyboardEventHandler = new KeyboardEventHandler(
  directionalFinder,
)
