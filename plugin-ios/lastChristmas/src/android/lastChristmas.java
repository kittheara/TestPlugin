package cordova.plugin.last.christmas;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.CordovaInterface;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.widget.Toast;
import android.util.Log;
import android.content.Context;

/**
 * This class echoes a string called from JavaScript.
 */
public class lastChristmas
	 extends CordovaPlugin {
private static final String TAG = "TOAST";
    Context context;

    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        context = cordova.getActivity().getApplicationContext();

        Log.d(TAG, "Initialize TOAST");
    }

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("show")) {
            String message = args.getString(0);

            Toast.makeText(context, message, Toast.LENGTH_SHORT).show();
            this.show(message, callbackContext);
            return true;
        }
        return false;
    }

    private void show(String message, CallbackContext callbackContext) {
        if (message != null && message.length() > 0) {
            callbackContext.success(message);
        } else {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }
}
