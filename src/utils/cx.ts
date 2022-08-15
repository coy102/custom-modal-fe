/* eslint-disable prefer-rest-params */
/* eslint-disable no-plusplus */
/* eslint-disable no-cond-assign */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-restricted-syntax */
function keyVal(mix) {
  let k
  let y
  let str = ''

  if (typeof mix === 'string' || typeof mix === 'number') {
    str += mix
  } else if (typeof mix === 'object') {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if ((y = keyVal(mix[k]))) {
            str && (str += ' ')
            str += y
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += ' ')
          str += k
        }
      }
    }
  }

  return str
}

export function cx() {
  let i = 0
  let tmp
  let x
  let str = ''
  while (i < arguments.length) {
    if ((tmp = arguments[i++])) {
      if ((x = keyVal(tmp))) {
        str && (str += ' ')
        str += x
      }
    }
  }
  return str
}

export default cx
