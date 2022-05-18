export const mod = (n, m) => (((n % m) + m) % m)

export const gcd = (n = 1, m = 1) => {
  n = Math.abs(n)
  m = Math.abs(m)
  if (m > n) {
    let a = n
    n = m
    m = a
  }
  while (true) {
    if (m === 0) return n
    n %= m
    if (n === 0) return m
    m %= n
  }
}

export const powmod = (base, exp, mod) => {
  if (exp == 0) return 1
  if (exp % 2 == 0) {
    return Math.pow(powmod(base, (exp / 2), mod), 2) % mod
  } else {
    return (base * powmod(base, (exp - 1), mod)) % mod
  }
}

export const modin = (a, m) => {
  [a, m] = [Number(a), Number(m)]

  if (Number.isNaN(a) || Number.isNaN(m)) {
    return NaN
  }

  a = (a % m + m) % m
  if (!a || m < 2) {
    return NaN
  }

  const s = []
  let b = m
  while(b) {
    [a, b] = [b, a % b]
    s.push({a, b})
  }

  if (a !== 1) {
    return NaN
  }

  let x = 1
  let y = 0
  for(let i = s.length - 2; i >= 0; --i) {
    [x, y] = [y,  x - y * Math.floor(s[i].a / s[i].b)]
  }

  return (y % m + m) % m
}

export default math = {
  mod,
  gcd,
  powmod,
  modin
}
