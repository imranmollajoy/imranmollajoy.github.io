// get all classes .horizontal-section, assign it to const hSection

const hSections = document.querySelectorAll('.horizontal-section');

hSections.forEach((hSection) => {
	const scrollAmount = hSection.clientWidth;
	hSection.addEventListener('wheel', function (e) {
		e.preventDefault();
		// if the mouse wheel is scrolling upward, wee will scroll
		// the section to the left
		if (e.deltaY > 0) hSection.scrollLeft += scrollAmount;
		else hSection.scrollLeft -= scrollAmount;
	});
});
