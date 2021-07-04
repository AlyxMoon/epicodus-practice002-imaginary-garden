
export default class ApiDayCycle {
  static getApiData (latitude, longitude) {
    return fetch(`https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`)
      .then(response => {
        if (!response.ok) throw new Error('did not work')

        return response.json()
      })
      .then(data => data.results)
  }
}
