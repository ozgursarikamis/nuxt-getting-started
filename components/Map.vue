<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue';
import { GlobeControl, Map, NavigationControl } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

let map = ref<Map>({} as Map);

onMounted(() => {
    map.value = new Map({
        container: 'map', // container id
        style: 'https://demotiles.maplibre.org/globe.json', // style URL
        center: [-4.15, 55.4], // starting position [lng, lat]
        zoom: 5,
        hash: true,
        roll: 2,
        rollEnabled: false,
    });
    map.value.addControl(new NavigationControl({
        visualizePitch: true,
        visualizeRoll: true,
        showZoom: true,
        showCompass: true
    }));
    map.value.addControl(new GlobeControl());
});

onUnmounted(() => {
    map.value.remove();
});
</script>
<template>
    <div id="map"></div>
</template>

<style scoped>
#map {
    height: 98vh;
    width: 100vw;
}
</style>