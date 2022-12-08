---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: false
tags: []
category: ""
type: post
cover:
    image: "./images/featured.png"
    alt: Thumbnail of {{ replace .Name "-" " " | title }}
---

