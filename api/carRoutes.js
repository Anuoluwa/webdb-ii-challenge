import express from 'express';
import * as Car from './carsModel';
import validateId from '../middlewares/validateId';

const route = express.Router();

route.get('/cars', async (req, res) => {
  try {
    const cars = await Car.get();
    if (!cars.length) {
      res.status(404).json({ message: 'No cars found!' });
    }
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: 'The cars information could not be retrieved.' });
  }
});

route.get('/cars/:id', validateId, async (req, res) => {
  const car = await Car.getById(req.params.id);

  try {
    if (car) {
      res.status(200).json(car);
    } else {
      res.status(404).json({ message: `The car with the specified id:${req.params.id} does not exist.` });
    }
  } catch (error) {
    res.status(500).json({ error: 'The car information could not be retrieved.' });
  }
});

route.post('/cars', (req, res) => {
  const {
    VIN, make, model, mileage, transmissionType, status,
  } = req.body;
  const car = {
    VIN, make, model, mileage, transmissionType, status,
  };
  Car.insert(car)
    .then((data) => {
      res
        .status(201)
        .json({ message: 'car information was created successfully', data: car });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: 'The car information could not be created.' });
    });
});

route.delete('/cars/:id', async (req, res) => {
  const item = await Car.getById(req.params.id);
  try {
    if (item) {
      await Car.remove(req.params.id);
      res.status(200).json({ message: 'This car has been deleted successfully', car: item });
    } else {
      res.status(404).json({ message: `The car with the specified ID ${req.params.id} does not exist.` });
    }
  } catch (error) {
    res.status(500).json({ error: 'The car could not be removed' });
  }
});

route.put('/cars/:id', async (req, res) => {
  const {
    VIN, make, model, mileage, transmissionType, status,
  } = req.body;
  const car = {
    VIN, make, model, mileage, transmissionType, status,
  };
  const item = await Car.getById(req.params.id);

  try {
    if (item) {
      const updatedCar = await Car.update(req.params.id, car);

      res.status(201).json({ message: 'car updated successfully', Car: item });
    } else {
      res.status(404).json({ message: `The car with the specified ID ${req.params.id} does not exist.` });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: 'Please car could not be updated. Try again' });
  }
});


export default route;
