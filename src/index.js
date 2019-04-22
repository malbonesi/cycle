export default (a, fn, step = 1) => { 
  let index = a.findIndex(fn)

  if(index === 0 && step < 0) {
    index--
  }

  return Math.abs(index + step) % a.length
}
