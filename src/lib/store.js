import { persistentAtom } from '@nanostores/persistent'

export const finances = persistentAtom('finances', [
//  {
// 		id: 'food',
// 		description: 'food',
// 		amount: 5433.54
// 	},
// 	{
// 		id: 'clothes',
// 		description: 'clothes',
// 		amount: 5433.54
// 	}
], {
  encode: JSON.stringify,
  decode: JSON.parse,
  listen: false,
})
