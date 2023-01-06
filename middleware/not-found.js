const notFound = (req, res) =>
  res.status(404).send("Route Does Not Exist Dude...");

module.exports = notFound;
