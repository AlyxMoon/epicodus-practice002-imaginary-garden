import 'purecss/build/pure-min.css'
import '@/styles/main.css'
import 'regenerator-runtime'

import ApiGeolocation from './api/geolocation'
import ApiDayCycle from './api/dayCycle'
import convertLatAndLon from './lib/convertLatAndLon'

const main = async () => {
  const dataGeolocation = await ApiGeolocation.getApiData()
  console.log('geolocation data:', dataGeolocation)

  const [latitude, longitude] = convertLatAndLon(dataGeolocation.loc)

  const dataDayCycle = await ApiDayCycle.getApiData(latitude, longitude)
  console.log('day cycle data:', dataDayCycle)
}

main()
