*** Settings ***
Documentation      Contains test cases related to the Book table in the database.

Suite Setup        Connect To MySQL Database
Suite Teardown     Disconnect From Database
Resource           ../resources/commonKeywords.robot

*** Test Cases ***
Book Category Table Should Exists
    Table Must Exist    book_category
    Log Pass Message    Book Category table exists


Pentateuch Books Should Exist
    ${5} Books Exist In Category "Pentateuch"
    Book "Genesis" Has Category "Pentateuch"
    Book "Exodus" Has Category "Pentateuch"
    Book "Leviticus" Has Category "Pentateuch"
    Book "Numbers" Has Category "Pentateuch"
    Book "Deuteronomy" Has Category "Pentateuch"

Gospels Should Exist
    ${4} Books Exist In Category "Gospels"
    Book "Matthew" Has Category "Gospels"
    Book "Mark" Has Category "Gospels"
    Book "Luke" Has Category "Gospels"
    Book "John" Has Category "Gospels"

*** Keywords ***
${count} Books Exist In Category "${category}"
    ${query}=    Set Variable    SELECT * FROM book b, book_category bc WHERE(b.book_category_id = bc.id AND bc.name = %s);
    @{parameters}=    Create List    ${category}
    Check Row Count    ${query}    ==    ${count}    parameters=${parameters}
    Log Pass Message    ${count} "${category}" books exist

Book "${title}" Has Category "${category}"
    ${query}=    Set Variable    SELECT * FROM book b, book_category bc WHERE(b.book_category_id = bc.id AND bc.name = %s AND b.title = %s);
    @{parameters}=    Create List    ${category}    ${title}
    Check Row Count    ${query}    ==    1    parameters=${parameters}  
    Log Pass Message    Book "${title}" Has Category "${category}"