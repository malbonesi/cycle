export default (a, fn, step = 1) => { 
  let index = a.findIndex(fn)

  if(index == -1){
    index = step < 1 ? 0 : -1
  }

  if(step < 0) {
    step = a.length + (step % a.length)
  }

  return (index + step) % a.length
}
