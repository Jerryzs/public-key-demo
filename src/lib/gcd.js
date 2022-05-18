const gcd = (n = 1, m = 1) => {
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

export default gcd
