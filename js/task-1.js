console.log("TASK 1");
const ulList = document.querySelectorAll("li.item");
console.log("Number of categories: " + ulList.length);

ulList.forEach((list) => {
  const categoryTitle = list.getElementsByTagName("h2")[0].textContent;
  console.log("Category: " + categoryTitle);
  const categoryElements = list.getElementsByTagName("ul")[0].childElementCount;
  console.log("Elements: " + categoryElements);
});
  
