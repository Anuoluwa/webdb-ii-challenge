
// eslint-disable-next-line func-names
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(() => {
      // Inserts seed entries
      return knex('cars').insert([
        {
          id: 1, VIN: 'TESLA123456789900USA', make: 'Tesla', model: 'Model 3 2019', mileage: '0000000', transmissionType: 'Automatic', status: 'Verified',
        },
        {
          id: 2, VIN: 'TESLA0987654321USA', make: 'Tesla', model: 'Model S 2018', mileage: '0000000',
        },
        {
          id: 3, VIN: 'TESLA12345688765USA', make: 'Tesla', model: 'Model X 2017', mileage: '0000000',
        },
      ]);
    });
};
