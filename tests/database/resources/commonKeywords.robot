*** Settings ***
Documentation    Contains keywords shared across test suites.
Library          OperatingSystem
Library          DatabaseLibrary
Library          String

*** Variables ***
${green_console_color}    \\033[92m
${white_console_color}    \\033[0m

${checkmark_unicode}      \u2713

*** Keywords ***
Connect To MySQL Database
    [Documentation]    Connects to a MySQL Database.
    ${username}=    Get Environment Variable    DB_USERNAME
    ${password}=    Get Environment Variable    DB_PASSWORD
    ${db_name}=     Get Environment Variable    DB_NAME

    Connect To Database
    ...     pymysql
    ...     ${db_name}
    ...     ${username}
    ...     ${password}
    ...     database
    ...     3306

Log Pass Message
    [Documentation]    Logs the passed in message to the console. 
    ...    Green text is displayed with a checkmark.
    [Arguments]        ${message}
    ${message}=        Replace String Using Regexp    ${message}    '    \\'
    ${log_message}=    Evaluate    '${green_console_color}${checkmark_unicode} ${message}${white_console_color}'
    Log To Console      ${log_message}
