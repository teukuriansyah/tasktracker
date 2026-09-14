package android.plugin.test;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "TaskPlugin")
class TaskPlugin : Plugin() {
  
  @PluginMethod
  fun getLocation(call: PluginCall) {
    
    val getLocation = Location()
    println(getLocation.location())

    JSObject ret = new JSObject()
    ret.put("location", getLocation.location())
    call.success(ret)
  }
}