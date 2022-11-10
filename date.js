function currentDateTime(){
  let dateNow = new Date()
  let dateObj = {
  date: dateNow.toLocaleDateString(),
  time: dateNow.toLocaleTimeString()
  }
  return dateObj
}

module.exports = {
  currentDateTime
}
