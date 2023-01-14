
function initMap() {
    const san_francisco = { lat: 37.7887775, lng: -122.3963437 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: san_francisco,
    });
    const marker = new google.maps.Marker({
      position: san_francisco,
      map: map,
    });
  }
  
  window.initMap = initMap;