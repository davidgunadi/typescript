/* global google */
/// <reference types="@types/google.maps" />

export interface Mappable {
    location: {
        lat: number,
        lng: number
    }
    markerContent(): string;
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId = 'map', zoomInput = 1, latInput = -7.2575, lngInput = 112.7521) {
        const mapElement = document.getElementById(divId) as HTMLInputElement;
        this.googleMap = new google.maps.Map(mapElement, {
            zoom: zoomInput,
            center: {
                lat: latInput,
                lng: lngInput,
            },
        });
    }

    addMarker(mappable: Mappable) {
        const googleMarker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            },
        });

        function openMarkerPopup() {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent(),
            });

            infoWindow.open(this.googleMap, googleMarker);
        }

        googleMarker.addListener('click', openMarkerPopup);
    }
}
