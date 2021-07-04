
export default class ApiGeolocation {
  static getApiData () {
    return fetch(`https://ipinfo.io/?token=${process.env.API_KEY_GEOLOCATION}`)
      .then(response => {
        if (!response.ok) throw new Error('did not work')

        return response.json()
      })
  }
}
