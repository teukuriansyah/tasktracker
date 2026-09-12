package com.test.plugins.taskplugin;

import com.getcapacitor.Logger;

public class TaskPlugin {

    public String echo(String value) {
        Logger.info("Echo", value);
        return value;
    }
}
