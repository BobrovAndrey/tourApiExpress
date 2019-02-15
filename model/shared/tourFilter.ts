export class TourFilters {
  readonly location: string
  readonly priceMin: number
  readonly priceMax: number
  constructor (data: any) {
    this.location = data.location,
    this.priceMax = data.priceMax,
    this.priceMin = data.priceMin
  }
}