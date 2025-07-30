package com.example;

public class ConsoleLogger {
    public static final String ANSI_GREEN = "\u001B[32m";
    public static final String ANSI_RESET = "\u001B[0m";
    private static final String CHECKMARK_UNICODE = "\u2713";

    public static void LogPassMessage(String message){
        System.out.printf(" %s%s %s %s\n",
        ANSI_GREEN, CHECKMARK_UNICODE, message, ANSI_RESET);
    }
}
