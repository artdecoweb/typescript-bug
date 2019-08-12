import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import typescriptBug from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof typescriptBug, 'function')
  },
  async 'calls package without error'() {
    await typescriptBug()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await typescriptBug({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T