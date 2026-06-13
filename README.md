# Playwright Learning

This repository contains Playwright and JavaScript learning examples organized by chapter. It is focused on JavaScript fundamentals and Playwright usage for browser automation practice.

## Structure

### chapter_01_JS_Basics
- `01_Basics.js` - Basic Playwright examples.
- `02_Verify_setup.js` - Browser setup and verification sample.
- `03__Identifiers_literals_operators.js` - JavaScript fundamentals practice.
- `04_comments.js` - JavaScript comments examples.

### chapter_02_var_let_const
- `05_var.js` - `var` declaration examples.
- `06_let.js` - `let` declaration examples.
- `07_const.js` - `const` declaration examples.
- `08_diff_var_let_const.js` - Differences between `var`, `let`, and `const`.
- `09_Hoisting_in_var.js` - Hoisting behavior with `var`.
- `10_Hoisting_in_fn.js` - Hoisting behavior in functions.

### chapter_07_if_else
- `if_else_eg.js` - Examples of if/else branching.
- `IQ_if_else.js` - Interview question practice for if/else logic.
- `leap_year.js` - Leap year decision logic.
- `login_validation.js` - Login validation using boolean checks.
- `my_eg.js` - Custom if/else example.
- `task_01.js`, `task_02.js`, `task3.js` - If/else practice tasks.
- `testcase_pass_fail_check.js` - Pass/fail checking with conditional logic.

### chapter_08_FOR_loop
- `fizz_buzz.js` - FizzBuzz implementation and loop practice.
- `FOR_loop_eg.js` - For-loop examples and patterns.
- `Triangle_classifier.js` - Triangle classification using loops.

### chapter_09_Array
- `Array_access&modify.js` - Array element access and modification.
- `Array_functions.js` - Common array methods and usage.
- `Array_index.js` - Finding element indexes in arrays.
- `concat.js`, `create_array.js` - Combining and creating arrays.
- `every.js`, `some.js` - Boolean checks over array elements.
- `find.js`, `includes.js` - Searching arrays.
- `pop.js`, `push.js`, `shift.js`, `unshift.js` - Array mutation methods.
- `slicing.js`, `sort.js`, `splice.js` - Array transformation methods.

### chapter_10_function
- `Arrow_fn.js` - Arrow function syntax and examples.
- `default_params.js` - Default function parameters.
- `fn_as_expression.js` - Function expressions and callbacks.
- `fn_in_diff_way.js` - Different ways to define and call functions.
- `function_notes.js` - Function basics and notes.
- `IIFE.js` - Immediately Invoked Function Expressions.
- `Rest_of_params.js` - Rest parameters and variable argument handling.
- `Type_1_fn.js`, `Type_2_fn.js`, `Type_3_fn.js`, `Type_4_fn.js` - Function type examples.

### chapter_14_callback
- `callback.js` - Callback function examples and asynchronous-style control flow with functions passed as arguments.

### chapter_15_Promises
- `notes.js` - Promise fundamentals, including states, resolve/reject, `.then`, `.catch`, `.finally`, and `Promise.all` behavior.

### chapter_13_Multidimensional_array
- `matrix.js` - Multidimensional array example using a 3x3 grid and nested loops.
  Prints all values from a 2D array using `matri[i][j]` access.

## Notes

- The repository is intended for learning Playwright and JavaScript basics.
- Files are organized into chapter folders to keep examples structured.
- Add more chapters and practice scripts as you continue learning.

## Usage

1. Install Node.js (v14+) if not already installed.
2. Run sample scripts with Node.js. Examples:

```powershell
node chapter_01_JS_Basics/02_Verify_setup.js
node chapter_08_FOR_loop/fizz_buzz.js
node chapter_15_Promises/notes.js
```

3. To run Playwright tests you add later, install Playwright and its browsers:

```powershell
npm init -y
npm i -D playwright
npx playwright install
```

## Git

- Commit changes locally with `git commit -m "message"` and push to your remote with `git push`.

---

Keep adding examples as you learn; contributions and improvements are welcome.
