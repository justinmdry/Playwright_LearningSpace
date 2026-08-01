/**
 * Centralized test data for the SmartBear "WebOrders" sample site.
 *
 * All page objects and specs pull their values from here instead of hard-coding
 * strings, so a single change (e.g. a new password or URL) updates every test.
 */
export const GlobalData = {

    // Login credentials
    username: "Tester",
    password: "test",
    invalidPassword: "abcd",
    errorMsg : "Invalid Login or Password.",

    // Expected order-grid checkbox counts / row values used by the delete tests
    beforeDelete : 8,
    afterDelete: 7,
    firstNameCheck: "Paul Brown",
    lastNameCheck: "Clare Jefferson",

    // Values used to fill out and submit a new order
    product: "FamilyAlbum",
    quantity: "10",
    addrInfo: "Test",
    zip:"12345",
    cardType:2,
    cardNumber:"1234123412341234",
    exprDate:"12/27",

    // Application URLs
    loginUrl: "http://secure.smartbearsoftware.com/samples/TestComplete12/WebOrders/Login.aspx",
    homeUrl: "http://secure.smartbearsoftware.com/samples/TestComplete12/WebOrders/Default.aspx",
    orderUrl: "http://secure.smartbearsoftware.com/samples/testcomplete12/weborders/Process.aspx"

}