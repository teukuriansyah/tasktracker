package android.plugin.test;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin()
class EchoPlugin : Plugin() {

  @PluginMethod
  fun echo(call: PluginCall) {
    
    val ret = JSObject()
    ret.put("value", "hey antek antek asing")
    call.success(ret)
  }
}