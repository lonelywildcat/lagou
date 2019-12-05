export const click = (button) => ({
		type: "MOUSE_CLICK",
		button		
});

export const animationFinished = (currentPic) => ({
		type: "ANIMATION_FINISHED",
});

export const selectSlide = (slide) => ({
		type: "SELECT_SLIDE",
		button: slide
});