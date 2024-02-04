const xhr = new XMLHttpRequest();
const mediumArticle = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@arkalsekar";

xhr.open("GET", mediumArticle);
xhr.send();
xhr.responseType = "json";

xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const data = xhr.response;
    for (i in data.items) {
      console.log(data.items[i])

      // Extracting title link and Body
      let title = data.items[i].title;
      let link = data.items[i].link;
      let body = data.items[i].content;

      // Creating a Card
      let card = document.createElement("div");
      card.className = " card--project";

      // Creating a Link Tag
      let name = document.createElement('a');
      name.href = link;
      name.innerHTML = title;

      // Appending a tag to card
      card.appendChild(name);

      // Appending card to main Blog Container
      let container = document.querySelector("#blogcontainer");
      container.appendChild(card);
    }
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};