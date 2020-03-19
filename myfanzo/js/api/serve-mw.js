module.exports = function (req, response, next) {
  if (req.method.toLowerCase() !== 'post') {
    next()
  }
  else {
    // req.header('Content-Type', 'application/json')
    console.log(req.read())

    next()
  }
}
