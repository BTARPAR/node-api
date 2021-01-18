import mongoose from 'mongoose'

import {AllMovies} from '../models/demoModel'

const Movies = mongoose.model('getAllMovies', AllMovies)

export const getAllData = (req, res) => {
  console.log({Movies})
  Movies.find({}, (err, movies) => {
    if (err) {
      res.send(err)
    }
    console.log({movies})
    res.json(movies)
  })
}
