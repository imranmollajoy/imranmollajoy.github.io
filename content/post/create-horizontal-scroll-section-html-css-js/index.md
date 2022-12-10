---
title: Create a horizontal scroll section with HTML,CSS and JS
description: ""
date: 2022-12-09T16:15:22+06:00
draft: false
tags:
  - css
  - html
  - js
category: Web development
type: post
cover:
    image: "./images/featured.png"
    alt: Thumbnail of Create Horizontal Scroll Section Html Css Js
slug: create-horizontal-scroll-section-html-css-js

---

## Horizontal Section

A horizontal section is a section which spreads left to right. It is very elegant and takes less space and can show more data.

## Making a horizontal section

Create three files, index.html, index.css and index.js. Name theme to your liking. Just be sure to link them properly in the index.html file. Then open the index.html file in your favorite code editor. Add the following code to the index.html file:

```
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="index.css" />
		<title>Document</title>
	</head>
	<body>
	    <main class="container">
            <!-- The horizontal section -->
            <section class="horizontal-section">
                <!-- Here the row of content will be added -->
            </section>
		</main>
    </body>
	<script src="index.js" />
</html>


```

Open the CSS file, add the following code:

```css
.container {
	max-width: 1024px;
	margin: 0 auto;
}
.horizontal-section {
    /* We will make the content display from left to right by flex */
	display: flex !important;
    /* Making the direction of the flex to row */
    flex-direction: row !important;
    /* The overflow in horizontal direction is needed to be hidden  */
	overflow-y: hidden !important;
    /* to smooth out the scrolling */
	scroll-behavior: smooth;
	width: 100%;
	gap: 0.6rem;
}
.horizontal-section::-webkit-scrollbar {
	/* Hide the scrollbar */
	display: none;
}

```
Now let's add the content we want to display in the horizontal section.
    
```
<!-- main start -->
<!-- The horizontal section -->
<section class="horizontal-section">
    <div class="card">
        <h4>Lorem ipsum</h4>
        <p>
            Sustainable pok pok pabst, pug cardigan chambray man bun big mood cold-pressed. Lo-fi
            gastropub photo booth plaid af jean shorts you probably haven't heard of them enamel
            pin.
        </p>
    </div>
    <div class="card">
        <h4>Lorem ipsum 2</h4>
        <p>Edison bulb etsy vaporware, aesthetic praxis hashtag 3 wolf moon letterpress.</p>
    </div>
    <div class="card">
        <h4>Lorem ipsum 3</h4>
        <p>
            DSA thundercats vinyl semiotics, adaptogen copper mug affogato big mood normcore craft
            beer. Hexagon 8-bit whatever tote bag wolf messenger bag.
        </p>
    </div>
    <div class="card">
        <h4>Lorem ipsum 4</h4>
        <p>Thundercats wolf lomo praxis, tofu direct trade bodega boys four loko semiotics.</p>
    </div>
    <div class="card">
        <h4>Lorem ipsum 5</h4>
        <p>
            Paleo farm-to-table forage praxis small batch. Kitsch af woke, narwhal crucifix tumeric
            organic pitchfork single-origin coffee microdosing. .
        </p>
    </div>
    <div class="card">
        <h4>Lorem ipsum 6</h4>
        <p>
            +1 tonx subway tile, fam vaporware normcore migas cronut direct trade heirloom four
            dollar toast. Copper mug lomo hexagon glossier. Cred cornhole hammock, PBR&B kogi craft
            beer edison bulb pinterest bushwick gatekeep cardigan enamel pin keytar succulents
        </p>
    </div>
    <div class="card">
        <h4>Lorem ipsum</h4>
        <p>Lorem ipsum this is a text</p>
    </div>
</section>
<!-- main end -->

```

Now let's style the cards.

```css
.card {
	/* setting a width a important, otherwise */
	/* the section won't be overflowed */
	min-width: 250px !important;
	height: 356px;
	background-color: #fff;
	padding: 20px;
}

```
Nice. Now open the index.html in your browser. You can see the result. The section is horizontal, and the contents are overflowing which are hidden.


### Adding scroll functionality
But you can't scroll to view rest of them. This is where we need a little bit of javascript. Open index.js and add the following...

```javascript
// get all classes .horizontal-section, assign it to const hSection
const hSections = document.querySelectorAll('.horizontal-section');

//attach wheel event listener to each hSection
hSections.forEach((hSection) => {
    // getting the width of the section
    // we will scroll this amount on mouse scroll
	const scrollAmount = hSection.clientWidth;
	hSection.addEventListener('wheel', function (e) {
		// we need to stop vertical page scroll when
        // scrolling on the horizontal section
        e.preventDefault();

		// if the mouse wheel is scrolling upward, we will scroll
		//  to the left
		if (e.deltaY > 0) hSection.scrollLeft += scrollAmount;
        
        // otherwise to the right
		else hSection.scrollLeft -= scrollAmount;
	});
});


```

Save and test the index.html. It's **working**!


## Final Code
Here is the full code.

```
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="index.css" />
    <title>Document</title>
  </head>
  <body>
    <main class="container">
      <section class="horizontal-section">
        <section class="horizontal-section">
          <div class="card">
            <h4>Lorem ipsum</h4>
            <p> Sustainable pok pok pabst, pug cardigan chambray man bun big mood cold-pressed. Lo-fi gastropub photo booth plaid af jean shorts you probably haven't heard of them enamel pin. </p>
          </div>
          <div class="card">
            <h4>Lorem ipsum 2</h4>
            <p>Edison bulb etsy vaporware, aesthetic praxis hashtag 3 wolf moon letterpress.</p>
          </div>
          <div class="card">
            <h4>Lorem ipsum 3</h4>
            <p> DSA thundercats vinyl semiotics, adaptogen copper mug affogato big mood normcore craft beer. Hexagon 8-bit whatever tote bag wolf messenger bag. </p>
          </div>
          <div class="card">
            <h4>Lorem ipsum 4</h4>
            <p>Thundercats wolf lomo praxis, tofu direct trade bodega boys four loko semiotics.</p>
          </div>
          <div class="card">
            <h4>Lorem ipsum 5</h4>
            <p> Paleo farm-to-table forage praxis small batch. Kitsch af woke, narwhal crucifix tumeric organic pitchfork single-origin coffee microdosing. . </p>
          </div>
          <div class="card">
            <h4>Lorem ipsum 6</h4>
            <p> +1 tonx subway tile, fam vaporware normcore migas cronut direct trade heirloom four dollar toast. Copper mug lomo hexagon glossier. Cred cornhole hammock, PBR&B kogi craft beer edison bulb pinterest bushwick gatekeep cardigan enamel pin keytar succulents </p>
          </div>
          <div class="card">
            <h4>Lorem ipsum</h4>
            <p>Lorem ipsum this is a text</p>
          </div>
        </section>
      </section>
    </main>
  </body>
  <script src="index.js"></script>
</html>

```

```css
/* index.css */
.container {
	max-width: 1024px;
	margin: 0 auto;
}
.horizontal-section {
	display: flex !important;
    flex-direction: row !important;
	overflow-y: hidden !important;
	scroll-behavior: smooth;
	width: 100%;
	gap: 0.6rem;
}
.horizontal-section::-webkit-scrollbar {
	display: none;
}

.card {
	/* setting a width a important, otherwise */
	/* the section won't be overflowed */
	min-width: 250px !important;
	height: 356px;
	background-color: #fff;
	padding: 20px;
}
/* =================extra bit of styling================== */
html {
	font-size: 100%;
}

body {
	font-family: 'Roboto', sans-serif;
	font-weight: 400;
	line-height: 1.75;
	color: #000000;
	background-color: aquamarine;
	min-height: 200vh;
}

p {
	margin-bottom: 1rem;
}

h4 {
	margin: 3rem 0 1.38rem;
	font-family: 'Raleway', sans-serif;
	font-weight: 300;
	line-height: 1.3;
	font-size: 1.777rem;

}

```

```js
// index.js
const hSections = document.querySelectorAll('.horizontal-section');
hSections.forEach((hSection) => {
	const scrollAmount = hSection.clientWidth;
	hSection.addEventListener('wheel', function (e) {
        e.preventDefault();
		if (e.deltaY > 0) hSection.scrollLeft += scrollAmount;
		else hSection.scrollLeft -= scrollAmount;
	});
});

```