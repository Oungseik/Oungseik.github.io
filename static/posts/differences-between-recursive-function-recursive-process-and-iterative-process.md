---
title: Differences between Recursive Function, Recursive Process and Iterative Process 
description: Brief explanation about recursive function, recursive process and iterative process.
keywords: ["recursion", "functional programming", "recursive function", "recursive process", "iterative process"]
date: "2023-8-17"
mainImage: "programming.jpg"
author: "Oung Seik Nyan"
estimateRead: 15mins read
categories:
  - Functional Programming 
published: false
---

The most confusing terms for new comers in functional programming field is what are recursion, recursive process, iterative process and how to analyze the way of processes generate. In this article I will explain you how to spot the recursive process and iterative process.
First let take a look recursive function.

### Recursive functions

Recursive functions are functions which invoke itself directly or indirectly. In functional programming languages, programmer use the recursive function to do write a loop. Let's take a look this code snippet:

```js
function sum_to(n) {
    return n === 0 ? 0 : n + sum_to(n - 1);
}
```

The body of `sum_to` invoke itself. Here is an recursive function which sum all elements in an array.
```js
function sum(arr){
    const [x, ...xs] = arr;
    return arr.length === 0 ? 0 : x + sum(xs);
}
```

### Recursive Process



