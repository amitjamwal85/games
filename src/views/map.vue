<template>
  <div class="center">
    <div>
      <h3>Your coordinate:</h3>
      <p>Latitude {{ myCoordinates.lat }}, Longitude {{ myCoordinates.lng }}</p>
    </div>
    <div>
      <h3>Map coordinate:</h3>
      <p>
        Latitude {{ mapCoordinates.lat }}, Longitude {{ mapCoordinates.lng }}
      </p>
    </div>
    <!--<GmapMap :center="myCoordinates"-->
               <!--:zoom="7"-->
                <!--style="width:840px; height:460px"-->
                <!--ref="mapRef"-->
      <!--&gt;-->
                <!--<GmapMarker-->
                <!--:position="myCoordinates"-->
                <!--:clickable="true"-->
                <!--:draggable="true"-->
              <!--/>-->
      <!--</GmapMap>-->
    <button @click="getDirection()">Get direction</button>
    <gmap-map
      v-show="showMap"
      ref="map"
      :center="destination"
      :zoom="11"
      style="width:840px; height:460px"
    >
      <GmapMarker  :position="this.coords"> </GmapMarker >
      <GmapMarker  :position="this.destination" > </GmapMarker>
       <gmap-marker :position="this.coordinates" :draggable="true" @drag="updateCoordinates"/>
    </gmap-map>

  </div>
</template>

<script>
import * as VueGoogleMaps from "vue2-google-maps";
import {gmapApi} from 'vue2-google-maps'
import Vue from 'vue';

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBOUhtLr3uivA2ODu0AB1HlWWeuOzvXzPw",
    libraries: 'places,directions',
      installComponents: true
  }
});

export default {
  name: "map1",
  data() {
    return {
      map: null,
      myCoordinates: {
        lat: 0,
        lng: 0
      },
      showMap: true,
      coords: {
        lat: -7.824374,
        lng: 110.262371
      },
      destination: {
        lat: -7.925665,
        lng: 110.298115
      },
      coordinates: {
        lat: -7.925665,
        lng: 110.358115
      },
    };
  },

    methods: {
        updateCoordinates(location) {
            this.coordinates = {
                lat: location.latLng.lat(),
                lng: location.latLng.lng(),
            };
        },

      getDirection(){
        var directionsService = new this.google.maps.DirectionsService;
        var directionsDisplay = new this.google.maps.DirectionsRenderer;
        directionsDisplay.setMap(this.$refs.map.$mapObject);

          function calculateAndDisplayRoute(directionsService, directionsDisplay, start, destination) {
            directionsService.route({
              origin: start,
              destination: destination,
              travelMode: 'DRIVING'
            }, function(response, status) {
                console.log("status:",response);
              if (status === 'OK') {
                directionsDisplay.setDirections(response);
              } else {
                window.alert('Directions request failed due to ' + status);
              }
            });
          }
          // console.log(this.coords);
          // console.log(this.destination);
          calculateAndDisplayRoute(directionsService, directionsDisplay, this.coords, this.destination);

      }
    },

  created() {
    this.$getLocation({})
      .then(coordinates => {
        this.myCoordinates = coordinates;
      })
      .catch(error => alert(error));
  },

  mounted() {
    this.$refs.map.$mapPromise.then(map => (this.map = map));
  },

  computed: {
      google: gmapApi,
    mapCoordinates() {
      if (!this.map) {
        return {
          lat: 0,
          lng: 0
        };
      }

      return {
        lat: this.map
          .getCenter()
          .lat()
          .toFixed(4),
        lng: this.map
          .getCenter()
          .lng()
          .toFixed(4)
      };
    }
  }
};
</script>

<style scoped>
.center {
  width: 50%;
  padding: 10px;
}
</style>
