import mongoose from 'mongoose'

import {MFlixSchema} from '../models/demoModel'

const Data = mongoose.model('sample_mflix', MFlixSchema)

export const getAllData = (req, res) => {
  console.log({Data})
  Data.find({}, (err, contact) => {
    if (err) {
      res.send(err)
    }
    res.json(contact)
  })
}
