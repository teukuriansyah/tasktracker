package android.plugin.test;

import com.google.android.gms.location.LocationServices
import com.google.android.gms.location.FusedLocationProviderClient

class Location : AppCompatActivity() {
    private lateinit var fusedLocationClient: FusedLocationProviderClient

    fun location() {
        fusedLocationClient = LocationServices.getFusedLocationProviderClient(this)
        val result = "error"

            fusedLocationClient.lastLocation
                .addOnSuccessListener { location ->
                    if (location != null) {
                        val latitude = location.latitude
                        val longitude = location.longitude
                        result = "${latitude} ${longitude}"
                    } else {
                        result = "error"
                    }
                }
        }
}