import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import typescriptBug from '../../src'

// export default
makeTestSuite('test/result', {
  async getResults(input) {
    const res = await typescriptBug({
      text: input,
    })
    return res
  },
  context: Context,
})