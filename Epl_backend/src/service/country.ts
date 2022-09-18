import { Country } from '../resources/country/country.model'

export async function createCountry(country) {
  const newCountry = await Country.create(country)
  return newCountry
}

export async function updateCountry(id, country) {
  const uCountry = await Country.findOneAndUpdate({ opid: id }, country)
  return uCountry
}
