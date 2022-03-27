    let x1 = [23.03740256, 72.5524046]; 
    let x2 = [23.03739215, 72.5524710];   

    function calcCrow(lat1, lon1, lat2, lon2) {
        var R = 6371;  // km
        var dLat = toRad(lat2 - lat1);
        var dLon = toRad(lon2 - lon1);
        var lat1 = toRad(lat1);
        var lat2 = toRad(lat2);

        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d;
    }

    // Converts numeric degrees to radians
    function toRad(Value) {
        return Value * Math.PI / 180;
    }

    function geoFindMe() {
    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
    
    
    mapLink.href = '';
    mapLink.textContent = '';
    
    function success(position) {
        let latitude  = position.coords.latitude;
        let longitude = position.coords.longitude;
            
        lat1 = toRad(x1[0]);
        lon1 = toRad(x1[1]);
        // lat1 = toRad(x2[0]);
        // lon1 = toRad(x2[1]);
        latitude1 = toRad(latitude);
        longitude1 = toRad(longitude);
        
        let d = calcCrow(lat1, lon1, latitude1, longitude1); 

         if (d<=0.00015){
             mapLink.textContent = 'You have been near someone who was infected'; 
        }
        else{
            mapLink.textContent = `You are safe`;
        }
    

    status.textContent = '';
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    }
    function error() {
    status.textContent = 'Unable to retrieve your location';
    }
    if(!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
    } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
    }
    }    document.querySelector('#btnradio2').addEventListener('click', geoFindMe);