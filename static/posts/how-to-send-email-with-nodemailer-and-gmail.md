---
title: How to Send Email with Nodemailer and Gmail
description: In this post I will show you how to setup nodemailer and gmail to send email and templating with Ejs.
keywords: ["nodemailer", "email", "send email", "nodemailer and email", "send email with nodejs"]
date: "2023-8-4"
mainImage: "send-email.jpg"
author: "Oung Seik Nyan"
estimateRead: 15mins read
categories:
  - Node.js
published: true
---

```ts
function greet(name: string) {
	console.log(`Hey ${name}! 👋`);
}
```

## Setup the Development Environment

Nodemailer is a Node.js module that prides itself as the solution most Node developers turn to by default for sending emails with Node.js and for good reason. It's pretty easy to set up nodemailer to start sending emails due to its features.

Most times, you would need a pretty quick way to start sending emails in your Node application when you're building for development and that's where Gmail comes in.

```bash
#npm
npm install nodemailer

#yarn
yarn add nodemailer
```
