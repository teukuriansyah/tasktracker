package android.plugin.test;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@CapacitorPlugin(name = "TaskPlugin")
class TaskPlugin : Plugin() {
  
  @PluginMethod
  fun getLocation(call: PluginCall) {
    
    val getLocation = Location()
    ret.put("location", getLocation.location())
    call.success(ret)
  }
}