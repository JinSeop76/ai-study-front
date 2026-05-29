import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import Point from 'ol/geom/Point'
import 'ol/ol.css'

export function basemap() {
  // 지도 인스턴스
  let map = null

  // 지도 초기화
  function initMap(targetRef) {
    const vworldSource = new XYZ({
      url: `https://api.vworld.kr/req/wmts/1.0.0/${import.meta.env.VITE_VWORLD_KEY}/Base/{z}/{y}/{x}.png`,
      crossOrigin: 'Anonymous',
    })

    const vworldTileLayer = new TileLayer({
      title: 'basemap',
      visible: true,
      source: vworldSource,
    })

    const view = new View({
      projection: 'EPSG:3857',
      center: new Point([126.9784, 37.5665])
        .transform('EPSG:4326', 'EPSG:3857')
        .getCoordinates(),
      zoom: 11,
      minZoom: 5,
      maxZoom: 19,
      constrainResolution: true,
    })

    map = new Map({
      target: targetRef,
      view,
      layers: [vworldTileLayer],
      controls: [],
    })
  }

  // 지도 인스턴스 반환 (외부에서 map 직접 접근 필요할 때)
  function getMap() {
    return map
  }

  // 정리
  function destroyMap() {
    map?.setTarget(null)
    map = null
  }

  // MapView.vue 에서 onUnmounted 안 써도 되도록 여기서 자동 처리
  

  return {
    initMap,
    getMap,
    destroyMap,
  }
}