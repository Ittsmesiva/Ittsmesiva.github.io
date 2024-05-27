function doPost(e) {
    try {
        const sheet = SpreadsheetApp.openById('AKfycbyC6HXNSUsuaMVa98NSazxBz9tV-oN7CijulHRabsi8480d36tiyo_Z1Pf1wIrvcUK4').getSheetByName('Sheet1');
        const { name, email, message } = e.parameters;

        sheet.appendRow([new Date(), name, email, message]);

        return ContentService
            .createTextOutput(JSON.stringify({ result: 'success' }))
            .setMimeType(ContentService.MimeType.JSON);
    } catch (error) {
        return ContentService
            .createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}
