package com.test.tasktracker;

import android.os.Bundle
import com.getcapacitor.BridgeActivity

class MainActivity : BridgeActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        registerPlugin(TaskPlugin::class)
        
        super.onCreate(savedInstanceState)
    }
}
