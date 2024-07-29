document.addEventListener("DOMContentLoaded", () => {
	fetch(
		"https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0101EN-SkillsNetwork/travel1.json"
	)
		.then((response) => response.json())
		.then((data) => {
			const resultContainer = document.getElementById("result");

			data.forEach((item) => {
				const { name, image, description } = item;

				
				const container = document.createElement("div");
				container.classList.add("recommendation-container");

				const img = document.createElement("img");
				img.src = image;
				img.alt = name;

				const nameElement = document.createElement("h3");
				nameElement.textContent = name;

				const descriptionElement = document.createElement("p");
				descriptionElement.textContent = description;

				container.appendChild(img);
				container.appendChild(nameElement);
				container.appendChild(descriptionElement);

				resultContainer.appendChild(container);
			});
		})
		.catch((error) => {
			console.error("Error fetching data:", error);
		});
});
