import 'purecss/build/pure-min.css'
import '@/styles/main.css'
import 'regenerator-runtime'

import ApiGeolocation from './api/geolocation'
import ApiDayCycle from './api/dayCycle'

const main = async () => {
  const dataGeolocation = await ApiGeolocation.getApiData()
  console.log('geolocation data:', dataGeolocation)

  const dataDayCycle = await ApiDayCycle.getApiData(45.5234, -122.6762)
  console.log('day cycle data:', dataDayCycle)
}

main()
