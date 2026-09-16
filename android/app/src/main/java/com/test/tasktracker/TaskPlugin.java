package com.test.tasktracker;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import android.content.SharedPreferences;
import android.content.Context;

@CapacitorPlugin(name = "Task")
public class TaskPlugin extends Plugin {

    @PluginMethod()
    public void getData(PluginCall call) {
        SharedPreferences sharedPref = getActivity().getPreferences(Context.MODE_PRIVATE);

        String datas = sharedPref.getString("data","No data");

        System.out.println(datas);

        JSObject ret = new JSObject();
        ret.put("data", datas);
        call.resolve(ret);
    }

    @PluginMethod()
    public void postData(PluginCall call) {
        SharedPreferences sharedPref = getActivity().getPreferences(Context.MODE_PRIVATE);

        String payload = call.getString("data");

        SharedPreferences.Editor editor = sharedPref.edit();
        editor.putString("data",payload);
        editor.commit();

        System.out.println(payload);

        JSObject ret = new JSObject();
        ret.put("message", "Success");
        call.resolve(ret);
    }
}