import db from '../data/dbConfig';

export function get() {
  return db('cars');
}

export function getById(id) {
  return db('cars').where({ id: Number(id) })
    .first();
}

export function insert(car) {
  return db('cars')
    .insert(car)
    .then(ids => ({ id: ids[0] }));
}

export function update(id, car) {
  return db('cars')
    .where('id', Number(id))
    .update(car);
}

export function remove(id) {
  return db('cars')
    .where('id', Number(id))
    .del();
}
