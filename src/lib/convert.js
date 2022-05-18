const PUN = {
  0:  ' ', 1:  '!', 2:  '@', 3:  '#', 4:  '$',
  5:  '%', 6:  '^', 7:  '&', 8:  '*', 9:  '(',
  10: ')', 11: '`', 12: '~', 13: '-', 14: '_',
  15: '=', 16: '+', 17: ',', 18: '.', 19: '/',
  20: '?', 21: ':', 22: ';', 23: "'", 24: '"',
  25: '[', 26: '{', 27: ']', 28: '}', 29: '\\',
  30: '|', 31: '<', 32: '>'
}

const NUM = Object.keys(PUN).reduce((o, k) => ({ ...o, [PUN[k]]: k }), {})
const SUP = Set(Object.keys(NUM))

const LOW_OFFSET = 10 - 97
const UPP_OFFSET = 10 + 26 - 65
const PUN_OFFSET = 10 + 26 + 26

export const toInt = (s = '') => {
  let o = ''

  for (const c of s) {
    if (c.match(/[0-9]/)) {
      o += '0' + c
      continue
    }

    if (c.match(/[a-z]/)) {
      o += c.charCodeAt(0) + LOW_OFFSET
      continue
    }

    if (c.match(/[A-Z]/)) {
      o += c.charCodeAt(0) + UPP_OFFSET
      continue
    }

    if (SUP.has(c)) {
      o += NUM[c] + PUN_OFFSET
      continue
    }

    console.log(`Unsupported value: ${c}`)
  }

  return BigInt(o)
}

export const toStr = (n = BigInt()) => {
  let s = n.toString()
  let o = ''

  for (let i = 0; i < s.length; i += 2) {
    const str = s.substring(i, i + 2)
    let num = parseInt(str)
    let a = num

    if (num >= 0 && num < 10) {
      o += num
      continue
    }

    a = num - LOW_OFFSET
    if (a >= 0 && a < 26) {
      o += String.fromCharCode(a)
      continue
    }

    a = num - UPP_OFFSET
    if (a >= 0 && a < 26) {
      o += String.fromCharCode(a)
      continue
    }

    a = num - PUN_OFFSET
    if (PUN[a] !== undefined) {
      o += PUN[a]
      continue
    }

    console.error(`Unknown value: ${str}`)
  }
}

export default convert =  { toInt, toStr }
