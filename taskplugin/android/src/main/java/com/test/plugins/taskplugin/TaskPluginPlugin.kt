package android.plugin.test;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import android.content.Context

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

  @PluginMethod
  fun postData(call: PluginCall) {
     val context:Context = this
    
     val sharedPreferences = context.getSharedPreferences("TaskPrefs", Context.MODE_PRIVATE)

     val editor = sharedPreferences.edit()
     val payload = call.getString("data")
     
     editor.putString("data", payload)
     editor.apply()

     JSObject ret = new JSObject()
     ret.put("message","Success")
     call.success(ret)
  }
  
  fun getData(call: PluginCall) {
     val context:Context = this
    
     val sharedPreferences = context.getSharedPreferences("UserPrefs", Context.MODE_PRIVATE)

     val datas = sharedPreferences.getString("data", "-") 

     println(datas)

     JSObject ret = new JSObject()
     ret.put("data",datas)
     call.success(ret)
  }
}