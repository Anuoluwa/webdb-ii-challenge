// eslint-disable-next-line consistent-return
export default function validateId(req, res, next) {
  const { id } = req.params;
  const parsedId = parseInt(id, 10);
  if (id.length === '') {
    return res.status(400).json({ error: '"ID" should not be empty!' });
  }
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(parsedId) === true) {
    return res.status(400).json({
      status: 409,
      error: 'Id must be a number',
    });
  }
  next();
}
