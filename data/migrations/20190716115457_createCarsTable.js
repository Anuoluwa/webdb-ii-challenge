
// eslint-disable-next-line func-names
exports.up = function (knex) {
  return knex.schema.createTable('cars', (table) => {
    table.increments();
    table.text('VIN', 50)
      .notNullable()
      .unique();
    table.text('make', 128)
      .notNullable();
    table.text('model', 128)
      .notNullable();
    table.integer('mileage', 10)
      .notNullable();
    table.text('transmissionType', 128);
    table.text('status', 50);
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

// eslint-disable-next-line func-names
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars');
};
