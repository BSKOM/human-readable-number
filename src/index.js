module.exports = function toReadable (number) {
  const s0019 = [
    '', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const s2090 = ['', '', 'twenty', 'thirty', 'forty',
    'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  let s = ''
  if (number > 99){
    s += s2090[number / 100] + ' hundred '
  }
  if ((number % 100) > 19) {
    s += s2090[number % 100] + ' ' + s0019[number % 100]
  } else if (number === 0) 
  s='zero'
  else s += s0019[number % 100]
  return s
}
