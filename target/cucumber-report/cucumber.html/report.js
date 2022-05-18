$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("account.feature");
formatter.feature({
  "line": 1,
  "name": "Account Test",
  "description": "",
  "id": "account-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6669506700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should create account successfully",
  "description": "",
  "id": "account-test;user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on signIn link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on account email \"soft243@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on account create",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on account gender",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter account firstname \"Johna\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter account lastname  \"Smith\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter  account password \"abc12345\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select  account birthdate  \"15\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select  account birthmonth \"11\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select  account birthyear \"2005\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter address firstname \"Miss smith\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter address lastname  \"George\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter address company \"jvc ltd\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter address line \"10,west town\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter address city \"Leeds\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter address state \"Ohio\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter address zipcode \"32184\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter address country \"United States\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter address info \"Nothing\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter address homephone \"0778456321\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter address mobilephone \"01574562112\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter address nameAddress \"10,Liverpool Street\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see the message \"MY ACCOUNT\" myaccount",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I should see the authentification message \"AUTHENTICATION\"",
  "keyword": "And "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 59936000,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 6597337300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "soft243@gmail.com",
      "offset": 26
    }
  ],
  "location": "CreateAccountPageTest.iClickOnAccountEmail(String)"
});
formatter.result({
  "duration": 81297500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountPageTest.iClickOnAccountCreate()"
});
formatter.result({
  "duration": 47312400,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountPageTest.iClickOnAccountGender()"
});
formatter.result({
  "duration": 20061741800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027id_gender2\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027KEYOU\u0027, ip: \u0027192.168.1.213\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [4a8996bbe7935a454d03a0a19b77631b, findElement {using\u003dxpath, value\u003d//input[@id\u003d\u0027id_gender2\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\mihir\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52599}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52599/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 4a8996bbe7935a454d03a0a19b77631b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:54)\r\n\tat com.automation.pages.CreateAccountPage.clickOnGenderRadioBtn(CreateAccountPage.java:118)\r\n\tat com.automation.steps.CreateAccountPageTest.iClickOnAccountGender(CreateAccountPageTest.java:24)\r\n\tat ✽.And I click on account gender(account.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Johna",
      "offset": 27
    }
  ],
  "location": "CreateAccountPageTest.iEnterAccountFirstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Smith",
      "offset": 27
    }
  ],
  "location": "CreateAccountPageTest.iEnterAccountLastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "abc12345",
      "offset": 27
    }
  ],
  "location": "CreateAccountPageTest.iEnterAccountPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 30
    }
  ],
  "location": "CreateAccountPageTest.iSelectAccountBirthdate(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 30
    }
  ],
  "location": "CreateAccountPageTest.iSelectAccountBirthmonth(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2005",
      "offset": 29
    }
  ],
  "location": "CreateAccountPageTest.iSelectAccountBirthyear(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Miss smith",
      "offset": 27
    }
  ],
  "location": "CreateAccountPageTest.iEnterAddressFirstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "George",
      "offset": 27
    }
  ],
  "location": "CreateAccountPageTest.iEnterAddressLastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "jvc ltd",
      "offset": 25
    }
  ],
  "location": "CreateAccountPageTest.iEnterAddressCompany(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10,west town",
      "offset": 22
    }
  ],
  "location": "CreateAccountPageTest.iEnterAddressLine(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Leeds",
      "offset": 22
    }
  ],
  "location": "CreateAccountPageTest.iEnterAddressCity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ohio",
      "offset": 23
    }
  ],
  "location": "CreateAccountPageTest.iEnterAddressState(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "32184",
      "offset": 25
    }
  ],
  "location": "CreateAccountPageTest.iEnterAddressZipcode(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 25
    }
  ],
  "location": "CreateAccountPageTest.iEnterAddressCountry(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Nothing",
      "offset": 22
    }
  ],
  "location": "CreateAccountPageTest.iEnterAddressInfo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0778456321",
      "offset": 27
    }
  ],
  "location": "CreateAccountPageTest.iEnterAddressHomephone(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "01574562112",
      "offset": 29
    }
  ],
  "location": "CreateAccountPageTest.iEnterAddressMobilephone(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10,Liverpool Street",
      "offset": 29
    }
  ],
  "location": "CreateAccountPageTest.iEnterAddressNameAddress(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountPageTest.iClickOnRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "MY ACCOUNT",
      "offset": 26
    }
  ],
  "location": "CreateAccountPageTest.iShouldSeeTheMessageMyaccount(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AUTHENTICATION",
      "offset": 43
    }
  ],
  "location": "SignPageTest.iShouldSeeTheAuthentificationMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 875456100,
  "status": "passed"
});
formatter.uri("signin.feature");
formatter.feature({
  "line": 2,
  "name": "SignInPage Test",
  "description": "",
  "id": "signinpage-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13571203400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to signIn page successfully",
  "description": "",
  "id": "signinpage-test;user-should-navigate-to-signin-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on signIn link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see the authentification message \"AUTHENTICATION\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 16700,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 16308858700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AUTHENTICATION",
      "offset": 43
    }
  ],
  "location": "SignPageTest.iShouldSeeTheAuthentificationMessage(String)"
});
formatter.result({
  "duration": 26160500,
  "status": "passed"
});
formatter.after({
  "duration": 637132200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "User should see the error message with InValid credentials",
  "description": "",
  "id": "signinpage-test;user-should-see-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I click on signIn link",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I enter username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the  error message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "signinpage-test;user-should-see-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ],
      "line": 17,
      "id": "signinpage-test;user-should-see-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "",
        "123456",
        "An email address required."
      ],
      "line": 18,
      "id": "signinpage-test;user-should-see-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "",
        "Password is required."
      ],
      "line": 19,
      "id": "signinpage-test;user-should-see-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfdfgfg",
        "123456",
        "Invalid email address."
      ],
      "line": 20,
      "id": "signinpage-test;user-should-see-the-error-message-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "123456",
        "Authentication failed."
      ],
      "line": 21,
      "id": "signinpage-test;user-should-see-the-error-message-with-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10518999200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User should see the error message with InValid credentials",
  "description": "",
  "id": "signinpage-test;user-should-see-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I click on signIn link",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I enter username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the  error message \"An email address required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 7846705800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 43317700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 53681300,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 4648299100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 33
    }
  ],
  "location": "SignPageTest.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 24447400,
  "status": "passed"
});
formatter.after({
  "duration": 629808000,
  "status": "passed"
});
formatter.before({
  "duration": 9466460300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should see the error message with InValid credentials",
  "description": "",
  "id": "signinpage-test;user-should-see-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I click on signIn link",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I enter username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the  error message \"Password is required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 11848153200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 62859700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 44794600,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 8991067100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 33
    }
  ],
  "location": "SignPageTest.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 29821400,
  "status": "passed"
});
formatter.after({
  "duration": 629402600,
  "status": "passed"
});
formatter.before({
  "duration": 5751343600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should see the error message with InValid credentials",
  "description": "",
  "id": "signinpage-test;user-should-see-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I click on signIn link",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I enter username \"adfdfgfg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the  error message \"Invalid email address.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 10384555100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfdfgfg",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 50398600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 49124400,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 7310602900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 33
    }
  ],
  "location": "SignPageTest.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 20981400,
  "status": "passed"
});
formatter.after({
  "duration": 625585700,
  "status": "passed"
});
formatter.before({
  "duration": 9829351200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should see the error message with InValid credentials",
  "description": "",
  "id": "signinpage-test;user-should-see-the-error-message-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I click on signIn link",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I enter username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the  error message \"Authentication failed.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 13709504800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 52655600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 56473700,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 9197254900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication failed.",
      "offset": 33
    }
  ],
  "location": "SignPageTest.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 22191500,
  "status": "passed"
});
formatter.after({
  "duration": 642073700,
  "status": "passed"
});
formatter.before({
  "duration": 10073029300,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should logIn successfully with valid credentials",
  "description": "",
  "id": "signinpage-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "I click on signIn link",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I enter username \"soft234@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter password \"abc12345\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see the signOut \"Sign out\" link",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 14590706700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "soft234@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 73073500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc12345",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 53754200,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 10251395800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign out",
      "offset": 26
    }
  ],
  "location": "SignPageTest.iShouldSeeTheSignOutLink(String)"
});
formatter.result({
  "duration": 40080450100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@title\u003d\u0027Log me out\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027KEYOU\u0027, ip: \u0027192.168.1.213\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [3f70b73a14b0fda13d0861493892c13a, findElement {using\u003dxpath, value\u003d//a[@title\u003d\u0027Log me out\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\mihir\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52847}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52847/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 3f70b73a14b0fda13d0861493892c13a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.automation.utility.Utility.getTextFromElement(Utility.java:65)\r\n\tat com.automation.pages.SignInPage.verifySignOut(SignInPage.java:97)\r\n\tat com.automation.steps.SignPageTest.iShouldSeeTheSignOutLink(SignPageTest.java:61)\r\n\tat ✽.Then I should see the signOut \"Sign out\" link(signin.feature:29)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 918786300,
  "status": "passed"
});
formatter.before({
  "duration": 5868557500,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "User should Logout SuccessFully",
  "description": "",
  "id": "signinpage-test;user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "I click on signIn link",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I enter username \"tin@mail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter password \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on signout link",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see the \"Sign in\" link on top menu",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 9027018800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tin@mail.com",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 54158200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 54333600,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1597706700,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignoutLink()"
});
formatter.result({
  "duration": 2508039100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign in",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iShouldSeeTheLinkOnTopMenu(String)"
});
formatter.result({
  "duration": 19446600,
  "status": "passed"
});
formatter.after({
  "duration": 604981500,
  "status": "passed"
});
formatter.uri("womencategory.feature");
formatter.feature({
  "line": 1,
  "name": "Women Category PageTest",
  "description": "",
  "id": "women-category-pagetest",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3339321800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to WomenCategory page successfully",
  "description": "",
  "id": "women-category-pagetest;user-should-navigate-to-womencategory-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Women link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see the women message \"Women\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 22000,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenLink()"
});
formatter.result({
  "duration": 12002565700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Women",
      "offset": 32
    }
  ],
  "location": "WomenCategoryPageTest.iShouldSeeTheWomenMessage(String)"
});
formatter.result({
  "duration": 21502600,
  "status": "passed"
});
formatter.after({
  "duration": 619563700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "User should AddProductToTheCartSuccessfully",
  "description": "",
  "id": "women-category-pagetest;user-should-addproducttothecartsuccessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on Women link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on product \"\u003cproduct\u003e\"from product",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on quantity \"\u003cqty\u003e\"from quntity",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on size \"\u003csize\u003e\"from size",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on colour \"\u003ccolour\u003e\"from colour",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the product message \"Product successfully added to your shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on close button",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "women-category-pagetest;user-should-addproducttothecartsuccessfully;",
  "rows": [
    {
      "cells": [
        "product",
        "qty",
        "size",
        "colour"
      ],
      "line": 22,
      "id": "women-category-pagetest;user-should-addproducttothecartsuccessfully;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 23,
      "id": "women-category-pagetest;user-should-addproducttothecartsuccessfully;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 24,
      "id": "women-category-pagetest;user-should-addproducttothecartsuccessfully;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 25,
      "id": "women-category-pagetest;user-should-addproducttothecartsuccessfully;;4"
    },
    {
      "cells": [
        "Printed Summer Dress with Price $28.98",
        "2",
        "M",
        "Blue"
      ],
      "line": 26,
      "id": "women-category-pagetest;user-should-addproducttothecartsuccessfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11828988900,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should AddProductToTheCartSuccessfully",
  "description": "",
  "id": "women-category-pagetest;user-should-addproducttothecartsuccessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on Women link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on product \"Blouse\"from product",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on quantity \"2\"from quntity",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on size \"M\"from size",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on colour \"White\"from colour",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the product message \"Product successfully added to your shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on close button",
  "keyword": "And "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 21500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenLink()"
});
formatter.result({
  "duration": 8528816800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProductFromProduct(String)"
});
formatter.result({
  "duration": 2625813500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnQuantityFromQuntity(String)"
});
formatter.result({
  "duration": 89061500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnSizeFromSize(String)"
});
formatter.result({
  "duration": 81861600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnColourFromColour(String)"
});
formatter.result({
  "duration": 2487700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 43454600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 34
    }
  ],
  "location": "WomenCategoryPageTest.iShouldSeeTheProductMessage(String)"
});
formatter.result({
  "duration": 5038075800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnCloseButton()"
});
formatter.result({
  "duration": 35044300,
  "status": "passed"
});
formatter.after({
  "duration": 635194800,
  "status": "passed"
});
formatter.before({
  "duration": 8057891700,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should AddProductToTheCartSuccessfully",
  "description": "",
  "id": "women-category-pagetest;user-should-addproducttothecartsuccessfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on Women link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on product \"Printed Dress\"from product",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on quantity \"3\"from quntity",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on size \"L\"from size",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on colour \"Orange\"from colour",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the product message \"Product successfully added to your shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on close button",
  "keyword": "And "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 13700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenLink()"
});
formatter.result({
  "duration": 11865863600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProductFromProduct(String)"
});
formatter.result({
  "duration": 9397478100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 21
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnQuantityFromQuntity(String)"
});
formatter.result({
  "duration": 61498000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnSizeFromSize(String)"
});
formatter.result({
  "duration": 59548400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnColourFromColour(String)"
});
formatter.result({
  "duration": 3479000,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 38551700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 34
    }
  ],
  "location": "WomenCategoryPageTest.iShouldSeeTheProductMessage(String)"
});
formatter.result({
  "duration": 5039654700,
  "error_message": "org.junit.ComparisonFailure: Cannot displayed message  expected:\u003c[Product successfully added to your shopping cart]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.automation.steps.WomenCategoryPageTest.iShouldSeeTheProductMessage(WomenCategoryPageTest.java:56)\r\n\tat ✽.Then I should see the product message \"Product successfully added to your shopping cart\"(womencategory.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnCloseButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 782066700,
  "status": "passed"
});
formatter.before({
  "duration": 11223667500,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should AddProductToTheCartSuccessfully",
  "description": "",
  "id": "women-category-pagetest;user-should-addproducttothecartsuccessfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on Women link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on product \"Printed Chiffon Dress\"from product",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on quantity \"4\"from quntity",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on size \"S\"from size",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on colour \"Green\"from colour",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the product message \"Product successfully added to your shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on close button",
  "keyword": "And "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 18700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenLink()"
});
formatter.result({
  "duration": 146999500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProductFromProduct(String)"
});
formatter.result({
  "duration": 16563754200,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with locator By.xpath: //a[contains(text(),\u0027Printed Chiffon Dress\u0027)]\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027KEYOU\u0027, ip: \u0027192.168.1.213\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:54)\r\n\tat com.automation.pages.WomenCategoryPage.selectProduct(WomenCategoryPage.java:67)\r\n\tat com.automation.steps.WomenCategoryPageTest.iClickOnProductFromProduct(WomenCategoryPageTest.java:34)\r\n\tat ✽.And I click on product \"Printed Chiffon Dress\"from product(womencategory.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 21
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnQuantityFromQuntity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnSizeFromSize(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnColourFromColour(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 34
    }
  ],
  "location": "WomenCategoryPageTest.iShouldSeeTheProductMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnCloseButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 12133463700,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027KEYOU\u0027, ip: \u0027192.168.1.213\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [7f29fd90570b90cf55bc3496db6e36ea, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\mihir\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53117}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53117/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 7f29fd90570b90cf55bc3496db6e36ea\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:349)\r\n\tat com.automation.utility.Utility.getScreenshot(Utility.java:339)\r\n\tat com.automation.Hooks.tearDown(Hooks.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 14139188800,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should AddProductToTheCartSuccessfully",
  "description": "",
  "id": "women-category-pagetest;user-should-addproducttothecartsuccessfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on Women link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on product \"Printed Summer Dress with Price $28.98\"from product",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on quantity \"2\"from quntity",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on size \"M\"from size",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on colour \"Blue\"from colour",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the product message \"Product successfully added to your shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on close button",
  "keyword": "And "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 21700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenLink()"
});
formatter.result({
  "duration": 14280729800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress with Price $28.98",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProductFromProduct(String)"
});
formatter.result({
  "duration": 13178027000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnQuantityFromQuntity(String)"
});
formatter.result({
  "duration": 121040400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnSizeFromSize(String)"
});
formatter.result({
  "duration": 68563000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnColourFromColour(String)"
});
formatter.result({
  "duration": 2843700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 46561800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 34
    }
  ],
  "location": "WomenCategoryPageTest.iShouldSeeTheProductMessage(String)"
});
formatter.result({
  "duration": 5044836200,
  "error_message": "org.junit.ComparisonFailure: Cannot displayed message  expected:\u003c[Product successfully added to your shopping cart]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.automation.steps.WomenCategoryPageTest.iShouldSeeTheProductMessage(WomenCategoryPageTest.java:56)\r\n\tat ✽.Then I should see the product message \"Product successfully added to your shopping cart\"(womencategory.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnCloseButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 837680200,
  "status": "passed"
});
});