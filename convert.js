function convert(number) {
  const romanNumerals = {
    1: 'I',
    4: 'IV',
    5: 'V',
    10: 'X',
    50: 'L'
  }

  let romanNumber = ''

  if (10 < number && number <= 13 ) {
    romanNumber += 'X'

    for(var i=1; i <= number - 10; i++) {
      romanNumber += romanNumerals[1]
    }
  }

  if (5 < number && number <= 8 ) {
    romanNumber += 'V'

    for(var i=1; i <= number - 5; i++) {
      romanNumber += romanNumerals[1]
    }
  }

  if (1 < number && number <= 3 ) {
    for(var i=1; i <= number; i++) {
      romanNumber += romanNumerals[1]
    }
  }

  if (romanNumber != '') return romanNumber

  return romanNumerals[number]
}

module.exports = convert;