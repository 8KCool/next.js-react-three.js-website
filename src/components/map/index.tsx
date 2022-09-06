import { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

const Maps = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCtt8vCUrFi12hwFLomHI-hVt2G2iRP-HA',
  })

  if (!isLoaded) return <div className="w-full  bg-violet-600">Loading...</div>
  return <Map />
}

function Map() {
  const center = useMemo(() => ({ lat: 55.3781, lng: 3.436 }), [])

  return (
    <GoogleMap
      zoom={5}
      center={center}
      mapContainerClassName="map-container w-full h-auto"
    >
      <Marker position={center} />
    </GoogleMap>
  )
}
export default Maps
