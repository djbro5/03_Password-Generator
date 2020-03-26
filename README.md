
# PROJECT TITLE:
 Password Generator

# PROBLEM DESCRIPTION:
For companies that handle large amounts of sensitive data, weak passwords can pose a real security threat. An application is required that can generate strong passwords quickly and effortlessly, thus saving employee's time and ensuring secure access to data.

# USER STORY:
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

# USER STORY ACCEPTANCE TEST

GIVEN that a user needs a new, secure password
WHEN prompted for password criteria
THEN a password is generated

# APPLICATION DESCRIPTION

## a) OPERATION

The user is prompted to choose from the following password criteria in following order:
    1. Enter password length (must be between 8 and 128 characters) 
    2. Select Uppercase characters - Click OK for YES or cancel for NO
    3. Select Lowercase characters - Click OK for YES or cancel for NO
    4. Select Numeric characters - Click OK for YES or cancel for NO
    5. Select Special characters -  Click OK for YES or cancel for NO
    6. Click on "Generate Password" button to generate and display password.
    7. Click on "Copy to clipboard" to save password to clipboard

Note: The application validates user input for password length and checks that at least one character type is selected.

## b) DEVELOPMENT

Technologies used web application include:
    * HTML
    * CSS
    * Bootstrap
    * JavaScript

Use of the Math.random() function provides the means of generating a purely random password.

# LICENSE

MIT License

Copyright (c) 2019 David Brown

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.








