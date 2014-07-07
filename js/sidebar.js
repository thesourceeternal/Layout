/*
* The way collapsibility and the html are set up may not be ideal or standard,
* no internet to refresh my memory right now. I have a feeling
* there's a more elegant way to do this, though the fact that I want
* to be able to highlight selected elements sometimes complicates matters.
 */

$(document).ready(function() {

	// --- Expand and Collapse --- \\
	$(".sidebar")
		// Hide and show elements appearing nested
		.on("click", ".collapser", function (evt) {
			$clickedElem = $(this)
			$clickedElem.parent().next().slideToggle();
			// Toggle the arrow image
			// $clickedElem.toggleClass("expanded");
			// For accessibility, change the alt text of the arrow
			if ($clickedElem.attr("alt") !== "Click to collapse") {
				$clickedElem.attr("alt", "Click to collapse")
			}
   			else if ($clickedElem.attr("alt") !== "Click to expand") {
				$clickedElem.attr("alt", "Click to expand")
   			}

			evt.stopPropagation();
			evt.preventDefault();
		});

	// --- Select scene object in tree --- \\
	$(".scene-tree")
		.on("click", ".selectable", function (evt) {
			$clickedElem = $(this)

			// Deselect all elements
			$(".scene-tree").find($(".selected-obj")).removeClass("selected-obj")
			// Select this element
			$clickedElem.addClass("selected-obj")
		})

});