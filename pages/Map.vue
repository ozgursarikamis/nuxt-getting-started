<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const mapEl = ref<HTMLElement | null>(null);
let map: maplibregl.Map | null = null;

const { public: { GoogleMapsKey } } = useRuntimeConfig();

function initMapLibreWithGoogleTiles() {
  if (!mapEl.value) return;

  const center = { lng: 35.5, lat: 38.73061 };
  const zoom = 6.9;

  // Initialize the MapLibre map
  map = new maplibregl.Map({
    container: mapEl.value,
    center,
    zoom,
    style: {
      version: 8,
      sources: {},
      layers: []
    }
  });

  // Wait for the style to load before adding sources and layers
  map.on('style.load', () => {
    // Add Google Maps raster tiles as the base map
    map?.addSource('google-maps', {
      type: 'raster',
      tiles: [
        `https://mt0.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=${GoogleMapsKey}`
      ],
      tileSize: 256
    });

    map?.addLayer({
      id: 'google-maps-layer',
      type: 'raster',
      source: 'google-maps'
    });

    // (Optional) Add XYZ Tile Layer
    addXYZTilesToMap(map);
  });

  return map;
}

// Function to overlay XYZ tiles on top of the map
function addXYZTilesToMap(map: maplibregl.Map | null) {
  const xyzTileUrl = 'http://localhost:5000/api/polygon/local-authorities/{z}/{x}/{y}.pbf';

  map?.addSource('xyz-tiles', {
    type: 'vector',
    tiles: [xyzTileUrl],
    minzoom: 0,
    maxzoom: 14, // Adjust based on your tile data
  });

  map?.addLayer({
    id: 'xyz-layer',
    type: 'fill', // Or 'line', 'symbol', etc., depending on your layer type
    source: 'xyz-tiles',
    'source-layer': 'source_layer_local_auth_districts', // Replace with actual layer name in vector tile data
    paint: {
      'fill-color': '#3887be',
      'fill-opacity': 0.5,
    },
  });
}

onMounted(() => {
  if (GoogleMapsKey) {
    map = initMapLibreWithGoogleTiles();
  } else {
    console.warn('Google Maps API key missing. Set GOOGLE_MAPS_KEY in .env');
  }
});

onBeforeUnmount(() => {
  if (map) {
    map.remove();
    map = null;
  }
});
</script>

<template>
  <div id="map" ref="mapEl"></div>
</template>

<style scoped>
#map {
  width: 100%;
  height: 100vh;
}
</style>