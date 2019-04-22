---
templateKey: challenge
title: Date Offset
date: 2019-04-01T12:15:05.420Z
challenger: Daniel Uhl
language: javascript
tags:
  - date
  - datetime
  - javascript
difficulty: 4
---
I've always found the `Date` object in JavaScript particularly difficult to work with. Time and time zones are extremely complex and working with them can be a nightmare without helpful utilities like `moment` or it's more recent and more modular `datefns`. This requires a basic understanding of `Date` to complete but as you'll see in the answers there are a few tricks that make for a clean solution.

Write a function that takes a negative or positive integer,
which represents the number of minutes before (-) or after (+)
Sunday midnight, and returns the day of the week and
the time in 24hr format ('hh:mm') as a string.

e.g.

```javascript
sundayOffset(1); // "Sunday 00:01"
sundayOffset(1440); // "Monday 00:00" (not 24:00)
```

[Challenge Link](https://codesandbox.io/s/2w624q2r2p)

## Answers

[Solution 1:](https://codesandbox.io/s/62k0mvr74z)

This first solution makes good use of [`toLocaleTimeString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString) to do all the formatting which can be difficult to remember but a very clean solution when the right settings are found.


[Solution 2:](https://codesandbox.io/s/k2lvyo85kr)

This one uses the same idea but manually formats the date string and needs to save a list of days as strings to do so. It gets the job done and is fairly easy to read and comes with the added advantage of being able to do completely custom formatting if necessary.

