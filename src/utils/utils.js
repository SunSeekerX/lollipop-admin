// import useClipboard from 'vue-clipboard3'
import { isNil, isPlainObject } from 'lodash'

// const { toClipboard } = useClipboard()

// export async function copy(text) {
//   await toClipboard(text)
// }

/**
 * 去除对象中有key为undefined或者null的情况
 * @param { Object } obj
 * @returns { Object } 处理完成之后的对象
 */
export function removeEmptyKey(obj = {}, remove = true) {
  for (const [key, value] of Object.entries(obj)) {
    if (isNil(value) || value === '') {
      remove ? delete obj[key] : (obj[key] = undefined)
    }
    if (isPlainObject(value)) {
      removeEmptyKey(value)
    }
  }
  return obj
}
