import mongoose from 'mongoose'

import {AllMoviesSchema} from '../models/demoModel'

const Movies = mongoose.model('Movies', AllMoviesSchema, 'getAllMovies')

export const getAllData = async (req, res) => {
  try {
    const movies = await Movies.find()
    res.json(movies)
  } catch (err) {
    res.json(err)
  }
}
