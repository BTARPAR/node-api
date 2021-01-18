import mongoose from 'mongoose'

import {MFlixSchema} from '../models/demoModel'

const Data = mongoose.model('sample_mflix/comments', MFlixSchema)

export const getAllData = (req, res) => {
  console.log({Data})
  Data.find({}, (err, commets) => {
    if (err) {
      res.send(err)
    }
    console.log({commets})
    res.json(commets)
  })
}
