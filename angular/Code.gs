function doGet(e) {
  return HtmlService.createTemplateFromFile('index').evaluate()
    .setTitle('Angular Template')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
};