export function id(req, res) {
  res.end(`Hello ${req.query.id}`);
}
