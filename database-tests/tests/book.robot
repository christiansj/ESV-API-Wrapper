*** Settings ***
Documentation      Contains test cases related to the Book table in the database.

Suite Setup        Connect To MySQL Database
Suite Teardown     Disconnect From Database
Resource           ../resources/commonKeywords.robot

*** Test Cases ***
Book Table Should Exist
    Table Must Exist    book
    Log Pass Message    Book table exists


Galatians Should Exist
    Book Should Exist    Galatians


Chapter Count Should Match
    ${chapter_row_count}=    Get Chapter Row Count    Galatians

    ${book_chapter_count}=    Set Variable    SELECT chapter_count FROM book WHERE title = %s
    @{parameters}=    Create List    Galatians
    Check Query Result  ${book_chapter_count}    ==    ${chapter_row_count}  
    ...    parameters=${parameters}
    

*** Keywords ***
Book Should Exist
    [Arguments]    ${title}
    ${query}=    Set Variable    SELECT * FROM book WHERE title = %s
    @{parameters}=    Create List    ${title}
    Check Row Count    ${query}    ==    1    parameters=${parameters}
    Log Pass Message    Book "${title}" was found


Get Chapter Row Count
    [Arguments]    ${book_title}
    ${query}=    Set Variable    SELECT * FROM chapter c, book b WHERE(c.book_id = b.id AND b.title = %s);
    @{parameters}=    Create List    ${book_title}
    ${row_count}=    Row Count    ${query}    parameters=${parameters}
    [return]    ${row_count}
