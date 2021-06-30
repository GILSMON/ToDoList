// creating a function to get data from modal

const taskContainer = document.querySelector(".task__container");    //selecting row by className
console.log(taskContainer);

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

};

