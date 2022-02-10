class Index {
  send = (res, body) => {
    try {
      res.status(body?.success ? 200 : 400)
      res.send(body)
    } catch (error) {
      console.log('Response send error ', error)

      res.status(500).send({
        status: false,
        error,
      })
    }
  }
}

module.exports = new Index()
