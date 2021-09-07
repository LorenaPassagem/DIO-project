import React from 'react'
import { GoogleApiWrapper, Map} from 'google-maps-react'
import { Search, SearchSharp } from '@material-ui/icons';
import { useState } from 'react/cjs/react.development';

export const MapContainer = (props)=>{
    const [map, setMap] = useState(null);
    const { google } = props;

    function SearchSNearby(map, center){
        const service = new google.maps.places.PlacesService(map)

        const request = {
            location: center,
            radius: '20000',
            type:['restaurant']
        };

        service.nearbySearch(request,(result, status) =>{
            if(status === google.maps.places.PlacesService.OK){
                //console.log('restaurant', results)
            }
        })
    }
    function onMapReady(_, map){
        setMap(map)
        SearchSNearby(map, map.center)
    }

    return <Map google ={google} 
        centerAroundCurrentLocation onMapReady={onMapReady} onRecenter={onMapReady}/>
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    language:'pt-br'
})(MapContainer)