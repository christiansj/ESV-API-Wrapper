*** Settings ***
Documentation      Contains test cases related to the Book table in the database.

Suite Setup        Connect To MySQL Database
Suite Teardown     Disconnect From Database
Resource           ../../resources/commonKeywords.robot

*** Test Cases ***
Book Table Should Exist
    Table Must Exist    book
    Log Pass Message    Book table exists

Galatians Should Exist
    Book Should Exist    Galatians

*** Keywords ***
Book Should Exist
    [Arguments]    ${title}
    ${query}=    Set Variable    SELECT * FROM book WHERE title = '${title}'
    Check If Exists In Database    ${query}
    ...    msg=FAIL: Book titled '${title}' was not found in Book table
    Log Pass Message    Book "${title}" was found