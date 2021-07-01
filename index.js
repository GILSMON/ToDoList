// creating a function to get data from modal

const taskContainer = document.querySelector(".task__container");    //selecting row by className

//  create an array of object to store card details

const golbalStore = [];

//  insert taskdata to the html code using templete literal
const createNewCard = (taskData) => `
<div class="col-md-6 col-lg-4">
<div class="card" id: ${taskData.id}>
  <div class="card-header d-flex justify-content-end gap-2">
    <button type="button" class="btn btn-outline-primary">
      <i class="fas fa-feather-alt"></i>
    </button>
    <button type="button" class="btn btn-outline-danger">
      <i class="fas fa-trash"></i>
    </button>
  </div>
  <div class="card-body">
    
    <p class="card-text">
      <img
        src=${taskData.imageurl}
        class="card-img-top"
        alt="task image"
      />
    </p>
    <h5 class="card-title">${taskData.tasktitle}</h5>
    <a href="#" class="btn btn-primary">${taskData.tasktype}</a>
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
  const {cards} = JSON.parse(getCardData);   // destructring

  // loop over those array of task object to create html card and inject it

  cards.map((cardObject) =>{

    taskContainer.insertAdjacentHTML("beforeend", createNewCard(cardObject) );

    //  update our global storage with previous datas from localstorage
    golbalStore.push(cardObject);
  });
}



const saveChange = () => {
    // creating an object to hold each data

    taskData = {
        id : `${Date.now()}`,   // return unique id each second
        imageurl: document.getElementById("imageurl").value,
        tasktitle: document.getElementById("tasktitle").value,
        tasktype : document.getElementById("tasktype").value,
        taskdescription : document.getElementById("taskdescription").value,
    };

    // insert the HTML elements to the DOM using javascript
  taskContainer.insertAdjacentHTML("beforeend", createNewCard(taskData));  

  golbalStore.push(taskData);

  //  storing in local storage
  // local storage has best support for stringified objects
  // stringify expect an object (cards is a new object and globalStore is an array)

  localStorage.setItem("appID",JSON.stringify({cards:golbalStore}));

};

