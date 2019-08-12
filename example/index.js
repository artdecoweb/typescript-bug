/* alanode example/ */
import typescriptBug from '../src'

(async () => {
  const res = await typescriptBug({
    text: 'example',
  })
  console.log(res)
})()