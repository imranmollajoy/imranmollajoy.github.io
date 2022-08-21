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
		// to the left
		if (e.deltaY > 0) hSection.scrollLeft += scrollAmount;
		// otherwise to the right
		else hSection.scrollLeft -= scrollAmount;
		console.log(e.deltaY);
	});
});
