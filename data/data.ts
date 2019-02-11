const jsonTours = require ('./tours.json')
const jsonReviews = require ('./reviews')

export class DataStore {
  static tours = jsonTours
  static reviews = jsonReviews
}