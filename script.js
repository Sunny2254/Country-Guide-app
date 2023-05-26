
let search = document.getElementById('search');
		let button = document.getElementById('button');
		let result = document.getElementById('result')


		async function country(){
			let countryname = search.value;
			console.log(countryname);
			let url = `https://restcountries.com/v3.1/name/${countryname}?fullText=true`
			let data = await fetch(url);
			let realdata = await data.json();
			console.log(realdata);
				console.log(realdata[0].borders);
				console.log(realdata[0].capital[0]);
				console.log(realdata[0].continents[0]);
				console.log(realdata[0].currencies[0]);
				console.log(realdata[0].maps);

				result.innerHTML = `

				<img src = "${realdata[0].flags.svg}" class="flag-img">
		 		<h2>${realdata[0].name.common}</h2>
		 		<div class-"wrapper">
		 			<div class="data-wrapper">
		 				<h4>Capital :: </h4>
		 				<span>${realdata[0].capital[0]}</span>
		 			</div>
		 		</div>
			

		 		<div class-"wrapper">
		 			<div class="data-wrapper">
		 				<h4>Continents :: </h4>
		 				<span>${realdata[0].continents[0]}</span>
		 			</div>
		 		</div>


		 		<div class-"wrapper">
		 			<div class="data-wrapper">
		 				<h4>Area :: </h4>
		 				<span>${realdata[0].area}</span>
		 			</div>
		 		</div>

		 		<div class-"wrapper">
		 			<div class="data-wrapper">
		 				<h4>Population :: </h4>
		 				<span>${realdata[0].population}</span>
		 			</div>
		 		</div>

				<div class-"wrapper">
				<div class="data-wrapper">
		 				<h4>Currency :: </h4>
		 				<span>${realdata[0].currencies[Object.keys(realdata[0].currencies)].name}</span>
		 				<span>${realdata[0].currencies[Object.keys(realdata[0].currencies)].symbol}</span>
		 			</div>
		 		</div>
	 		<div class-"wrapper">
		 			<div class="data-wrapper">
		 				<h4>Borders :: </h4>
		 				<span>${realdata[0].borders}</span>
		 			</div>
		 		</div>

		 		<div class-"wrapper">
		 			<div class="data-wrapper">
		 				<h4>Timezone:: </h4>
		 				<span>${realdata[0].timezones[0]}</span>
		 			</div>
		 		</div>


		 		<div class-"wrapper">
		 			<div class="data-wrapper">
		 				<h4>Sub-region:: </h4>
		 				<span>${realdata[0].subregion}</span>
		 			</div>
		 		</div>

	 		<div class-"wrapper">
		 			<div class="data-wrapper">
		 				<h4>Coat Of Arms:: </h4>
		 				<img src = "${realdata[0].coatOfArms.svg}" class="coat-img">
		 			</div>
				</div>`



		}

		

		// button.addEventListener("click",() =>{
		// 	let countryname = search.value;
		// 	// console.log(countryname);
		// 	let url = `https://restcountries.com/v3.1/name/${countryname}?fullText=true`
		// 	console.log(url)
		// 	fetch(url).then((response) => response.json())
		// 	.then((data) =>{
		// 		console.log(data);
		// 		// console.log(data[0].borders);
		 		// console.log(data[0].capital[0]);
		// 		console.log(data[0].continents[0]);
		// 		console.log(data[0].currencies[0]);
		// 		console.log(data[0].maps);

		// 		result.innerHTML = `

		// 		<img src = "${data[0].flags.svg}" class="flag-img">
		// 		<h2>${data[0].name.common}</h2>
		// 		<div class-"wrapper">
		// 			<div class="data-wrapper">
		// 				<h4>Capital :: </h4>
		// 				<span>${data[0].capital[0]}</span>
		// 			</div>
		// 		</div>
			

		// 		<div class-"wrapper">
		// 			<div class="data-wrapper">
		// 				<h4>Continents :: </h4>
		// 				<span>${data[0].continents[0]}</span>
		// 			</div>
		// 		</div>


		// 		<div class-"wrapper">
		// 			<div class="data-wrapper">
		// 				<h4>Area :: </h4>
		// 				<span>${data[0].area}</span>
		// 			</div>
		// 		</div>

		// 		<div class-"wrapper">
		// 			<div class="data-wrapper">
		// 				<h4>Population :: </h4>
		// 				<span>${data[0].population}</span>
		// 			</div>
		// 		</div>

		// 		<div class-"wrapper">
		// 			<div class="data-wrapper">
		// 				<h4>Currency :: </h4>
		// 				<span>${data[0].currencies[Object.keys(data[0].currencies)].name}</span>
		// 				<span>${data[0].currencies[Object.keys(data[0].currencies)].symbol}</span>
		// 			</div>
		// 		</div>

		// 		<div class-"wrapper">
		// 			<div class="data-wrapper">
		// 				<h4>Borders :: </h4>
		// 				<span>${data[0].borders}</span>
		// 			</div>
		// 		</div>

		// 		<div class-"wrapper">
		// 			<div class="data-wrapper">
		// 				<h4>Timezone:: </h4>
		// 				<span>${data[0].timezones[0]}</span>
		// 			</div>
		// 		</div>


		// 		<div class-"wrapper">
		// 			<div class="data-wrapper">
		// 				<h4>Sub-region:: </h4>
		// 				<span>${data[0].subregion}</span>
		// 			</div>
		// 		</div>


		// 		<div class-"wrapper">
		// 			<div class="data-wrapper">
		// 				<h4>Coat Of Arms:: </h4>
		// 				<img src = "${data[0].coatOfArms.svg}" class="coat-img">
		// 			</div>
		// 		</div>

			





		// 		`
		// 	})

		// })