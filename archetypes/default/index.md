---
title: {{ replace .Name "-" " " | title }}
date: {{ .Date }}
draft: false
tags: 
    - Untagged
categories:
    -   Uncategorized
type: post
cover:
    image: "./images/featured.png"
    alt: Thumbnail of {{ replace .Name "-" " " | title }}
slug: {{ .Name }}
weight: 1
---

