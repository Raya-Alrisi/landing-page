let nav = document.getElementById("mainNav");
let sections = ["Home", "About Us", "Service", "Contact"];
let navLinks = [];
sections.forEach(function(sectionName, index){
	let sectionId = "section" + (index + 1);
	
	let navLink = document.createElement("a");
	navLink.href = "#" + sectionId;
	navLink.textContent = sectionName;
	navLink.addEventListener("click", function(e){
		e.preventDefault();
		document.getElementById(sectionId).scrollIntoView({behavior: 'smooth'});
		navLinks.forEach(function(link){
			link.classList.remove("active");
		});
		navLink.classList.add("active");
	});
	
	//Mouseover for hover effect
	navLink.addEventListener("mouseover", function(){
		navLink.style.color = "#60B3E4";
	});
	
	//Removing Mouseover of hover effect
	navLink.addEventListener("mouseout", function(){
		navLink.style.color = "";
	});

	// add listener for scroll
	window.addEventListener("scroll", function() {
    let roll = sections.getBoundingClientRect();

    if (roll.top >= 0 && roll.bottom <= window.innerHeight) {
        // Section is in the viewport
        navLinks.forEach(function(link){
			link.classList.remove("active");
		});
		navLink.classList.add("active");
    }
});
	
	//appendChild
	nav.appendChild(navLink);
	
	//push to Array
	navLinks.push(navLink);
});