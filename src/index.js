export { default } from './lib'

/**
 * Directly exported method.
 * @param {string} name The name of the method.
 */
export const secondaryAPI = (name) => {
  console.log(name)
}