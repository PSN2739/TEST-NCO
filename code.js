/** DOGET */
function doGet() {
  return HtmlService.createTemplateFromFile("index").evaluate()
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
  .setTitle('Tactical Studies Section')
}



/** INCLUDE FILE */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
  .getContent();
}


/** @Get URL */
function getScriptURL() {
  return ScriptApp.getService().getUrl();
}



/** SETTING VARIEBLE */
var ss = SpreadsheetApp.getActive().getSheets()[0]


/** GET DATA FUNCTION */
function getData(){
const data = ss.getDataRange().getValues().slice(2)
Logger.log(data)
return data
}

