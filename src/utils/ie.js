/**
 * Created by Caijc on 2017/5/14.
 */
if (window["context"] == undefined) {
  if (!window.location.origin) {
    window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
  }
  window["context"] = location.origin+"/V6.0";
}
