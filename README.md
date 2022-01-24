# Palindrome Checker

# Built with
- JavaScript

# Overview

A palindrome is a word or sentence that is spelled the same way when flipped horizontally e.g eye, race car etc.
The goal of the "Palindrome checker" project is to detect if certain words or sentences are palindromes.

The palindrome function takes in a single argument: str which has a string data type and checks if the string is a 
palindrome.


# Algorithm

1. The string is converted into a list (a string is immutable, making it difficult to work with)
2. All non-alphanumeric components of the string are filtered out (cleaned string)
3. A horizontally flipped copy of the string is created
4. The cleaned string is now compared with the flipped string
5. A value of true means its a palindrome and vice versa
