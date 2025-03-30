
function mode() {
  // Get the body element
  const body = document.body;
  
  // Toggle between light mode and dark mode by setting background and text colors
  if (body.style.backgroundColor === "black") {
    // Switch to light mode
    body.style.backgroundColor = "white";
    body.style.color = "black";
  } else {
    // Switch to dark mode
    body.style.backgroundColor = "black";
    body.style.color = "white";
  }
  
}

const items = [
  {
    image: "./photos/chatgpt.jpg",
    name: 'Chatgpt',
    purpose: 'A conversational AI that generates human-like text responses',
    link:'https://chatgpt.com/'
  },
  {
    image: "./photos/b..png",
    name: "beautiful.ai",
    purpose: 'PPt Maker',
    link:'https://www.beautiful.ai/'
  },
  {
    image: "./photos/web.png",
    name: "Webflow",
    purpose: 'Frontend Development',
    link:'https://webflow.com/'
  },
  {
    image: "./photos/workik.jpeg",
    name: "Workik",
    purpose: 'Database schema generator',
    link:'https://workik.com/'
  },
  {
    image: "./photos/zety.webp",
    name: "Zety",
    purpose: 'Resume building',
    link:'https://zety.com/'
  },
  {
    image: "./photos/Appy.png",
    name: "Appy Pie",
    purpose:'App development',
    link:'https://www.appypie.com/'
  },
  {
    image: "./photos/hit.jpeg",
    name: "HitFilm Express",
     purpose:'Video Editing',
     link:'https://hitfilm-express.en.softonic.com/'
  },
  {
    image: "./photos/v.avif",
    name: " Veed.io",
    purpose: 'Subtitles Generator',
    link:'https://www.veed.io/'
  },
  {
    image: "./photos/des.jpg",
    name: "  Descript",
    purpose: 'Audio Generator',
    link:'https://www.descript.com/'
  },
  {
    image: "./photos/cr.webp",
    name: " Craiyon",
    purpose: 'Image Generator',
    link:'https://www.craiyon.com/'
  }
];

// Display items function
function display(filteredItems) {
  const showsItems = document.querySelector("#showsitems");
  const messageDiv = document.querySelector("#message");

  if (filteredItems.length === 0) {
    messageDiv.innerText = "No items found!";
    showsItems.innerHTML = "";
    return;
  }

  messageDiv.textContent = ""; // Clear any previous message
  let itemHtml = "";
  filteredItems.forEach((item) => {
    itemHtml += `
      <div class="border-2 border-white rounded-3xl w-50 h-87 bg-black md:ml-15 md:mr-15">
        <div>
          <a href=${item.link} target="blank"><img class="h-60 w-80 p-2 rounded-3xl border-2" src=${item.image}></a></div>
          <p class="font-bold text-white border-2" align="center ">${item.name}</p>
          <p class="text-red-600 fo">Purpose-<span class="text-green-600 text-md font-bold">${item.purpose}</span></p>
      </div>`;
  });
  showsItems.innerHTML = itemHtml;
}

display(items); // display all items

// Search functionality
const searchInput = document.querySelector("#sitem");
searchInput.addEventListener("input", () => {
  const searchItem = searchInput.value.toLowerCase();
  const filteredItems = items.filter((item) => item.name.toLowerCase().includes(searchItem));
  display(filteredItems);
});
