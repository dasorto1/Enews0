package com.goodnewsv0hn2;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import com.zoontek.rnbootsplash.RNBootSplash;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "GoodNews";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState){
    super.onCreate(savedInstanceState);
    RNBootSplash.init(R.drawable.bootsplash, MainActivity.this);
  }
}

// package com.splash;
// import android.os.Bundle;
// import com.facebook.react.ReactActivity;
// import org.devio.rn.splashscreen.SplashScreen;

// public class MainActivity extends ReactActivity {
//    @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         SplashScreen.show(this);
//         super.onCreate(savedInstanceState);
//     }
//   /**
//    * Returns the name of the main component registered from JavaScript. This is used to schedule
//    * rendering of the component.
//    */
//   @Override
//   protected String getMainComponentName() {
//     return "Splash";
//   }
// }