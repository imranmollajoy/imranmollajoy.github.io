---
name: A dummy post lorem ipsum dolor sit amet
slug: dummy-post
category: 'Dummy'
date: 17 Aug, 2023
---

## Dummy post
A dummy post is made for testing purposes.

> Always check your back - 
> *Sun Tzu(Art of War)*

```javascript
// A Sample code from this site
export const load = async ({ url }) => {
	const resPort = await fetch(`${url.origin}/api/portfolios`);
	const resBlog = await fetch(`${url.origin}/api/blogs`);

	const portfolios = await resPort.json();
	const blogs = await resBlog.json();

	return {
		portfolios,
		blogs
	};
};
```
---

### Why though?

Because it is extremely necessary. 

```md
---
name: A dummy post lorem ipsum dolor sit amet
slug: dummy-post
category: ['Uncategorized']
date: 17 Aug, 2023
---

## Dummy post
A dummy post is made for testing purposes.

> Always check your back - 
> *Sun Tzu(Art of War)*

*code block is removed for compatibility*

---

### Why though?

Because it is extremely necessary. 
```

| Heading 1| Heading 2| Heading 3
|---|----|---|
|ritwq|kasjndad|fgdfgd|
|amdska| ksadmk|hfhfghf|