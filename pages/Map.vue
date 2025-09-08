<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

import type { RadioGroupItem, RadioGroupValue } from '@nuxt/ui'

const mapTypes = ref<RadioGroupItem[]>([
  {
    label: 'MapLibre',
    value: 'MapLibre',
  },
  {
    label: 'Google Maps',
    value: 'GoogleMaps'
  }]
);
const mapSelection = ref<RadioGroupValue>('MapLibre')


// Nuxt runtime config (key is defined in nuxt.config.ts -> runtimeConfig.public.GoogleMapsKey)
const { public: { GoogleMapsKey } } = useRuntimeConfig()

// Refs
const mapEl = ref<HTMLElement | null>(null)
let map: any = null
let marker: any = null

// If you don't have @types/google.maps installed, we declare a loose type to keep TS happy
// Remove this when adding proper types: npm i -D @types/google.maps
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const google: any

function loadGoogleMaps(apiKey: string): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve()

  // If already loaded, resolve immediately
  if (window.google && window.google.maps) return Promise.resolve()

  // If a loader script is already in the DOM, wait for it to load
  const existing = document.querySelector('script[data-google-maps-loader]') as HTMLScriptElement | null
  if (existing) {
    return new Promise((resolve, reject) => {
      if ((window as any)._googleMapsLoaded) return resolve()
      existing.addEventListener('load', () => resolve())
      existing.addEventListener('error', () => reject(new Error('Failed to load Google Maps script')))
    })
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places&loading=async` // add libs as needed
    script.async = true
    script.defer = true
    script.setAttribute('data-google-maps-loader', 'true')

    script.addEventListener('load', () => {
      ;(window as any)._googleMapsLoaded = true
      resolve()
    })
    script.addEventListener('error', () => reject(new Error('Failed to load Google Maps script')))

    document.head.appendChild(script)
  })
}

async function initGoogleMaps() {
  if (!mapEl.value) return

  await loadGoogleMaps(GoogleMapsKey as unknown as string)

  const center = { lat: 38.73061, lng: 35.50 }
  const zoom = 6.9;

  if (mapSelection.value === 'MapLibre') {
    map = new maplibregl.Map({
      container: 'map', // container id
      style: 'https://demotiles.maplibre.org/globe.json', // style URL
      center, // starting position [lng, lat]
      zoom // starting zoom
    });
  } else if (mapSelection.value === 'GoogleMaps') {
    map = new google.maps.Map(mapEl.value, {
      center,
      zoom,
      fullscreenControl: false,
      mapTypeControl: false,
    })
  }

  map.addControl(new maplibregl.NavigationControl(), 'bottom-right');
}

onMounted(() => {
  // Avoid SSR issues and only run on client
  if (GoogleMapsKey) {
    initGoogleMaps()
  } else {
    // eslint-disable-next-line no-console
    console.warn('Google Maps API key missing. Set GOOGLE_MAPS_KEY in .env')
  }
})

onBeforeUnmount(() => {
  // Clean up references (Google Maps cleans up its own listeners on GC)
  marker = null
  map = null
})

function mapModelChanged() {
  console.log('mapModelChanged', mapSelection.value);
  initGoogleMaps();
}
</script>

<template>

  <URadioGroup @change="mapModelChanged(mapSelection)" v-model="mapSelection" :items="mapTypes"/>
  <div id="map" ref="mapEl"/>
</template>

<style scoped>
#map {
  width: 100%;
  height: 100vh;
}

/***** The styles below are kept minimal for the demo *****/
:global(body) {
  height: 100%;
  margin: 0;
  padding: 0;
}

.place-picker-container {
  padding: 20px;
}
</style>