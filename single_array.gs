single_array_to_sheet = (url) => {
    //console.log(url)
    try {
        const sheet = "app" //sheet name
        const response = UrlFetchApp.fetch(url);
        const data = JSON.parse(response.getContentText());
        //Logger.log(data.request.reportType);
        
        var app = SpreadsheetApp.getActive().getSheetByName(sheet)
        app.appendRow(data);

    } catch (f) {
        Logger.log(f.message);
    }
}
