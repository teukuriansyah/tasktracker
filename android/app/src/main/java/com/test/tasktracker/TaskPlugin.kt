package com.test.tasktracker;

import com.getcapacitor.JSObject;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@CapacitorPlugin(name="Task")
class TaskPlugin : Plugin() {

  @PluginMethod
  fun getData(call: PluginCall) {
    val ret = JSObject()
    ret.put("data", "mbg sehat")
    call.success(ret)
  }
}