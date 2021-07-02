// creating a function to get data from modal

const taskContainer = document.querySelector(".task__container"); //selecting row by className

//  create an array of object to store card details

let globalStore = [];

//  insert taskdata to the html code using templete literal
const createNewCard = (taskData) => `
<div class="col-md-6 col-lg-4">
<div class="card" >
  <div class="card-header d-flex justify-content-end gap-2">
    <button type="button" class="btn btn-outline-primary">
      <i class="fas fa-feather-alt"></i>
    </button>
    <button type="button" class="btn btn-outline-danger" id= ${taskData.id} onclick="deleteCard.apply(this,arguments)">
      <i class="fas fa-trash"  id= ${taskData.id} onclick="deleteCard.apply(this,arguments)" ></i>
    </button>
  </div>
  <div class="card-body">
    
    <p class="card-text">
      <img
        src=${taskData.imageUrl}
        class="card-img-top"
        alt="task image"
      />
    </p>
    <h5 class="card-title">${taskData.taskTitle}</h5>
    <p class="card-text">
      ${taskData.taskDescription}
    </p>
    <a href="#" class="btn btn-primary">${taskData.taskType}</a>
  </div>
  <div class="card-footer">
    <button
      type="button"
      class="btn btn-outline-success fw-bolder float-end"
    >
      Focus here
    </button>
  </div>
</div>
</div>
`;

const loadInitialCardData = () => {
  // getting card details from local storage
  const getCardData = localStorage.getItem("appID");

  // convert from string to normal object
  const {cards} = JSON.parse(getCardData); // destructring

  // loop over those array of task object to create html card and inject it

  cards.map((cardObject) => {
    taskContainer.insertAdjacentHTML("beforeend", createNewCard(cardObject));

    //  update our global storage with previous datas from localstorage
    globalStore.push(cardObject);
  })
};

// local storage code inside
const saveChange = () => {
  // creating an object to hold each data

  const taskData = {
    id: `${Date.now()}`, // return unique id each second
    imageUrl: document.getElementById("imageurl").value,
    taskTitle: document.getElementById("tasktitle").value,
    taskType: document.getElementById("tasktype").value,
    taskDescription: document.getElementById("taskdescription").value,
  };

  // insert the HTML elements to the DOM using javascript
  taskContainer.insertAdjacentHTML("beforeend", createNewCard(taskData));

  globalStore.push(taskData);

  //  storing in local storage
  // local storage has best support for stringified objects
  // stringify expect an object (cards is a new object and globalStore is an array)

  localStorage.setItem("appID", JSON.stringify({cards: globalStore}));
};

const deleteCard = (event) => {
  event = window.event;
  // id
  const targetID = event.target.id;
  const tagname = event.target.tagName; // BUTTON   or icon

  // match id and updating the global array

  // let newUpdatedArray = globalStore.filter((cardObject) => cardObject.id !== targetID);
  // console.log(newUpdatedArray);
  // // update  local storage after delection

  // globalStore = newUpdatedArray;

  // localStorage.setItem("appID", JSON.stringify({cards: globalStore}));

  globalStore = globalStore.filter((cardObject) => cardObject.id !== targetID); 
  localStorage.setItem("appID", JSON.stringify({cards:globalStore})); // an object
  


  // contact parent

  if (tagname === "BUTTON") {
    return taskContainer.removeChild(
      event.target.parentNode.parentNode.parentNode
    );
  }
  //  I haven't faced issue with the icon , so eliminating the else portion
  else {
     return taskContainer.removeChild(
      event.target.parentNode.parentNode.parentNode.parentNode
    );
  }
};
