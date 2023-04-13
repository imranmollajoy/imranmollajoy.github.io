---
title: Create a horizontal scroll section with HTML,CSS and JS
date: 2022-12-09T16:15:22+06:00
draft: false
tags:
  - tutorial
  - how-to
  - web-dev
category: Web development
type: post
cover:
  image: './images/featured.png'
  alt: Thumbnail of Create Horizontal Scroll Section Html Css Js
slug: create-horizontal-scroll-section-html-css-js
description: Learn how to use HTML, CSS, and JavaScript to create a horizontal scrolling section on your website.
weight: 1
---

## Horizontal Section

A horizontal section is a type of layout in which the content is arranged from left to right, rather than from top to bottom. This design can be elegant and visually appealing, and it can also save space by allowing more content to be displayed on the screen at once. Horizontal sections are commonly used in web design to create menus, galleries, or other types of content that can be easily scrolled through by the user. To create a horizontal section, you can use CSS styles such as `display: flex;` and `flex-wrap: wrap;` to control the layout and appearance of the content.

## Making a horizontal section

Create three files: index.html, index.css, and index.js. Name them to your liking, but make sure to link them properly in the index.html file. Then, open the index.html file in your favorite code editor and add the following code:

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

Now that we have the basic structure in place, let's add the content that we want to display in the horizontal section of the page.

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

Now that we have added the content, let's focus on styling the cards to make them look more attractive and professional. We can use CSS styles to control the layout, colors, fonts, and other aspects of the cards' appearance.

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

Great! Now, open the index.html file in your web browser to see the result. You'll notice that the section is horizontal and that the contents are overflowing and hidden.

### Adding scroll functionality

But you can't scroll to view rest of them. This is where we need a little bit of javascript. Open the index.js file and add the following code

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

Here is the complete code for the index.html, index.css, and index.js files, which you can use to create a horizontal section with scrollable cards:

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


In conclusion, we have successfully created a horizontal section with scrollable cards using HTML, CSS, and JavaScript. By using a combination of flexbox layout and overflow-wrapping, we were able to create a responsive and user-friendly design that allows the user to easily scroll through the cards and view all of the content. This can be used to create engaging and interactive user interfaces.
