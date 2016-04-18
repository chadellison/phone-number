function PhoneNumber(raw_number) {
  this.number = function() {
    raw_number = raw_number.replace(/[^\d]/g, '')
    if (raw_number.length === 11 && raw_number.startsWith(1)) {
      return raw_number.substring(1)
    } else if (raw_number.length === 10){
      return raw_number
    } else {
      return "0000000000"
    }
  }

  this.areaCode = function() {
    return raw_number.substring(0, 3)
  }

  this.toString = function() {
    return "(" + raw_number.substring(0, 3) +
     ")" +
      " " +
       raw_number.substring(3, 6) +
        "-" +
         raw_number.substring(6, 10)
  }
}

module.exports = PhoneNumber
