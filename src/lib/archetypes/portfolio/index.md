---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: false
tags: []
featuredImg: "./images/featured.png"
cover:
    image: "./images/featured.png"
    alt: Thumbnail of {{ replace .Name "-" " " | title }}
layout: portfolio
---
