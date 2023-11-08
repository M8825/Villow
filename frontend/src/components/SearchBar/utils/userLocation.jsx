  // Helper method for getLocation() that grabs the user's current position
  async function getCurrentPosition() {
      return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
      });
  }

  // Grabs and returns the user's current location as an object with lat and lng properties
  export async function getLocation() {
      try {
          const position = await getCurrentPosition();
          const { latitude, longitude } = position.coords;

          return { lat: latitude, lng: longitude };
      } catch (error) {
          return { lat: 40.777222, lng: -73.951792 };

      }
  }

  export async function getUserCity(coordinates) {
      const { lat, lng } = coordinates;
      const MAPS_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

      const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${MAPS_API_KEY}`
      );
      const data = await response.json();

      if (data.results.length > 0) {

          // Look for the zip code in the address_components array
          const addressComponents = data.results[0].address_components;
          return addressComponents[3].long_name + ", " + addressComponents[5].short_name;
      }

      // If no zip code is found, return null
      return null;
  }

