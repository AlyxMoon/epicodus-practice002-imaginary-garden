import 'purecss/build/pure-min.css'
import '@/styles/main.css'
import 'regenerator-runtime'

import ApiGeolocation from './api/geolocation'

const main = async () => {
  const data = await ApiGeolocation.getApiData()

  console.log('did we get this?', data)
}

main()
