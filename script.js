let data;

async function init(){
	let link = "https://data.cityofnewyork.us/resource/jb7j-dtam.json";
	info = await fetch(link);
	data = await info.json();
}

function causes(){
	let a = 0, b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, aa = 0, bb = 0, cc = 0
	let choice = document.getElementById("graphs").value
	let analysis = document.getElementById("analysis")
	for (let i=0; i < data.length; i ++){
		let c = data[i]
		if (c.deaths == "."){

		}else if (c.leading_cause == "Nephritis, Nephrotic Syndrome and Nephrisis (N00-N07, N17-N19, N25-N27)"){
			a += parseInt(c.deaths)
			console.log(a)
		}else if (c.leading_cause == "Malignant Neoplasms (Cancer: C00-C97)"){
			b += parseInt(c.deaths)
		}else if (c.leading_cause == "All Other Causes"){
			q += parseInt(c.deaths)
		}else if (c.leading_cause == "Cerebrovascular Disease (Stroke: I60-I69)"){
			d += parseInt(c.deaths)
		}else if (c.leading_cause == "Diseases of Heart (I00-I09, I11, I13, I20-I51)"){
			e += parseInt(c.deaths)
		}else if (c.leading_cause == "Influenza (Flu) and Pneumonia (J09-J18)"){
			f += parseInt(c.deaths)
		}else if (c.leading_cause == "Alzheimer's Disease (G30)"){
			g += parseInt(c.deaths)
		}else if (c.leading_cause == "Essential Hypertension and Renal Diseases (I10, I12)"){
			h += parseInt(c.deaths)
		}else if (c.leading_cause == "Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)"){
			j += parseInt(c.deaths)
		}else if (c.leading_cause == "Certain Conditions originating in the Perinatal Period (P00-P96)"){
			k += parseInt(c.deaths)
		}else if (c.leading_cause == "Chronic Liver Disease and Cirrhosis (K70, K73)"){
			l += parseInt(c.deaths)
		}else if (c.leading_cause == "Chronic Lower Respiratory Diseases (J40-J47)"){
			m += parseInt(c.deaths)
		}else if (c.leading_cause == "Diabetes Mellitus (E10-E14)"){
			n += parseInt(c.deaths)
		}else if (c.leading_cause == "Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)"){
			o += parseInt(c.deaths)
		}else if (c.leading_cause == "Congenital Malformations, Deformations, and Chromosomal Abnormalities (Q00-Q99)"){
			p += parseInt(c.deaths)
		}else if (c.leading_cause == "Septicemia (A40-A41)"){
			r += parseInt(c.deaths)
		}else if (c.leading_cause == "Intentional Self-Harm (Suicide: X60-X84, Y87.0)"){
			s += parseInt(c.deaths)
		}else if (c.leading_cause == "Assault (Homicide: Y87.1, X85-Y09)"){
			t += parseInt(c.deaths)
		}else if (c.leading_cause == "Human Immunodeficiency Virus Disease (HIV: B20-B24)"){
			u += parseInt(c.deaths)
		}else if (c.leading_cause == "Viral Hepatitis (B15-B19)"){
			v += parseInt(c.deaths)
		}else if (c.leading_cause == "Aortic Aneurysm and Dissection (I71)"){
			w += parseInt(c.deaths)
		}else if (c.leading_cause == "Parkinson's Disease (G20)"){
			y += parseInt(c.deaths)
		}else if (c.leading_cause == "Atherosclerosis (I70)"){
			aa += parseInt(c.deaths)
		}else if (c.leading_cause == "Mental and Behavioral Disorders due to Use of Alcohol (F10)"){
			bb += parseInt(c.deaths)
		}else if (c.leading_cause == "Insitu or Benign / Uncertain Neoplasms (D00-D48)"){
			cc += parseInt(c.deaths)
		}
		else{
			z += parseInt(c.deaths)
			console.log(c.leading_cause) }
		}
	let charts =[ ["Nephritis", a], ["Cancer", b], ["Other", q], ["Stroke", d], ["Heart Disease", e], ["Flu and Pneumonia", f], ["Alzheimer's", g], ["Essential Hypertension and Renal Diseases", h], ["Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use", j], ["Certain Conditions originating in the Perinatal Period", k], ["Liver Disease and Cirrhosis", l], ["Lower Respiratory Diseases", m], ["Diabetes",n], ["Accidents Except Drug Posioning",o], ["Congenital Malformations, Deformations, and Chromosomal Abnormalities", p], ["Septicemia", r], ["Suicide", s], ["Homicide", t], ["HIV", u],["Hepatitis", v], ["Insitu or Benign / Uncertain Neoplasms",cc] ]
	console.log(charts)
	displayChart(charts, 'chart', choice)
	analysis.innerHTML = `<p>This graph shows that the most major cause of death in New York City is heart disease followed by cancer. There are a lot of other causes of deaths, but some have killed only a handful of people over the years, such as "Insitu or Benign / Uncertain Neoplasms" which have only killed five people according to the data. Heart disease, however, has killed over 35% of the people in the data and cancer has killed nearly a quarter of them.</p>`
}

function race(){
	let b = 0, w = 0, o = 0, u = 0, a = 0
	let choice = document.getElementById("graphs").value
	let analysis2 = document.getElementById("analysis2")
	for (let i=0; i < data.length; i ++){
		let c = data[i]
		if (c.deaths == "."){

		}else if (c.race_ethnicity == "Black Non-Hispanic"){
			b += parseInt(c.deaths)
		}else if (c.race_ethnicity == "White Non-Hispanic"){
			w += parseInt(c.deaths)
		}else if (c.race_ethnicity == "Other Race/ Ethnicity"){
			o += parseInt(c.deaths)
		}else if (c.race_ethnicity == "Asian and Pacific Islander"){
			a += parseInt(c.deaths)
		}else if (c.race_ethnicity == "Not Stated/Unknown"){
			u += parseInt(c.deaths) }
	}
	let charts =[ ["Black", b], ["White", w ], ["Other", o], ["Asian and Pacific Islander", a], ["Unknown", u] ];
	console.log(charts)
	displayChart(charts, 'chart2', choice)
	analysis2.innerHTML =`<p>This graph shows the amount of people that are each ethnicity that have died in NYC. Using this, we can also get a better idea of what people lived in NYC during the time period. This graph shows that white people died more than any other group, so there was probably a big portion of white people in the city. As well, the "other" group is probably made up of some hispanic people, and there weren't many "other" people around when the data was taken from.</p>` 
}

function filter_0(){
	let year = parseInt(document.getElementById("year").value);
	let output = document.getElementById("output");
	let build = "";
	for (let i = 0; i < data.length; i++){
		let info = data[i];
		if(info.year == year){
			build +=`<div class="row">`;
			build +=`<div class="column">`;
			build +=`<div class="flip-card">`;
			build +=`<div class="flip-card-inner">`;
			build +=`<div class="flip-card-front">`
			build +=`<p>Leading Cause of Death: ${info.leading_cause}</p>`
			build +=`</div>`;
			build +=`<div class="flip-card-back">`;
			build +=`<h1>Sex: ${info.sex}</h1>`;
			build +=`<p>Ethnicity/Race: ${info.race_ethnicity}</p>`;
			build +=`<p>Deaths: ${info.deaths}</p>`;
			build +=`</div>`;
			build +=`</div>`;
			build +=`</div>`;
			build +=`</div>`;
			build +=`</div>`;
		}
	}
	output.innerHTML= build;
}

function filter_1(){
	let cause = document.getElementById("cause").value;
	let output = document.getElementById("output");
	let build = "";
	for (let i = 0; i < data.length; i++){
		let info = data[i];
		if(info.leading_cause == cause){
			build +=`<div class="row">`;
			build +=`<div class="column">`;
			build +=`<div class="flip-card">`;
			build +=`<div class="flip-card-inner">`;
			build +=`<div class="flip-card-front">`
			build +=`<p>Leading Cause of Death: ${info.leading_cause}</p>`
			build +=`</div>`;
			build +=`<div class="flip-card-back">`;
			build +=`<h1>Sex: ${info.sex}</h1>`;
			build +=`<p>Year: ${info.year}</p>`;
			build +=`<p>Ethnicity/Race: ${info.race_ethnicity}</p>`;
			build +=`<p>Deaths: ${info.deaths}</p>`;
			build +=`</div>`;
			build +=`</div>`;
			build +=`</div>`;
			build +=`</div>`;
			build +=`</div>`;
		}
	}
	output.innerHTML= build;
}