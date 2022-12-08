---
title: "Differences Between Ssg and Spa"
date: 2022-12-08T19:26:52+06:00
draft: false
tags: []
category: ""
type: post
cover:
    image: "./images/featured.png"
    alt: Thumbnail of Differences Between Ssg and Spa
---

## SSR
SSR means Server side rendering. In this mode, the requested page gets rendered on the server. 

Building in SSR is fast compared to SSG when dealing with many pages. However it is slower than SSG in client side. SEO can be a little tricky but can do its job when done properly. Useful for app/sites that depends on everchanging data or interactive elements.

## SSG
SSG means Static site generation. The site is rendered once during build time. It is faster than SSR in terms of performance. Useful for blogs, magazines, documentation etc. where data is not dynamic.

## What should You Choose

This depends on your use cases. If you are making a simple website like a blog, you should use an SSG. On the other hand, it you want to make am interactive app like a weather app, or an app which requires data fetching by the users, use a SSR.
Also, many frameworks allow you to use both SSG and SSR side by side, meaning you can use SSR on dynamic parts and SSG on other parts of your site.