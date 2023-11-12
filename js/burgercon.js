
(function(){

	let button = document.querySelector("#burger");
	let burgerCon = document.querySelector("#globalnav-con");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
	};



	document.getElementById('burger-con').addEventListener('click', function() {
		const burgerCon = document.getElementById('burger-con');
		const globalNavCon = document.getElementById('globalnav-con');
	 
		burgerCon.classList.toggle('active');
		globalNavCon.classList.toggle('active');
	 });
	 


	 button.addEventListener("click", hamburgerMenu, false);		
})();
