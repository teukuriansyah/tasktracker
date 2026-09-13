package android.plugin.test;

import com.google.android.gms.location.LocationServices
import com.google.android.gms.location.FusedLocationProviderClient

class Location : AppCompatActivity() {
    private lateinit var fusedLocationClient: FusedLocationProviderClient

    fun location() {
      fusedLocationClient = LocationServices.getFusedLocationProviderClient(this)

        fusedLocationClient.lastLocation
            .addOnSuccessListener { location ->
                if (location != null) {
                    val latitude = location.latitude
                    val longitude = location.longitude
                    return arrayOf(latitude,longitude)
                } else {
                    return "error"
                }
            }
    }
}