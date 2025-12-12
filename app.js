const API_URL = "https://106api-b0bnggbsgnezbzcz.westus3-01.azurewebsites.net/api/tasks";

function saveTask() {
    const title = $('#txtTitle').val();
    const description = $('#txtDescription').val();
    const color = $('#selColor').val();
    const date = $('#selDate').val();
    const status = $('#selStatus').val();
    const budget = $('#numBudget').val();

    const data = new Task(title, description, color, date, status, budget);
    console.log(data);

    $.ajax({
        type: "POST",
        url: "https://106api-b0bnggbsgnezbzcz.westus3-01.azurewebsites.net/api/tasks",
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function (created) {
            console.log("Task created:", created);
        },
        error: function (error) {
            console.log("Error:", error);
        }

    });
}

function loadTask() {
    $.ajax({
        type: "get",
        url: "https://106api-b0bnggbsgnezbzcz.westus3-01.azurewebsites.net/api/tasks",
        dataType: "json",
        success: function (tasks) {
            console.log(tasks)
            //all the objects are being sent to 1 container
            for (let i = 0; i < tasks.length; i++) {
                let temp = tasks[i];
             //   if(temp.name ==="john"){
                  displayTask(temp)
                }
              // displayTask(temp);
            }
            //  tasks.forEach(displayTask);
            //MiniChallenge - only use the elements that you create


        }
    )};


function updateTask()
{
    $.ajax({
    type:"PUT",
    url:"https://106api-b0bnggbsgnezbzcz.westus3-01.azurewebsites.net/api/tasks{id}",
    data: JSON.stringify({
        title:"newEntry",
    }),
    contentType: "application/json",
    success: function(response)
    {
        console.log("update success", reponse)
    },
    error: function(err)
    {
        console.log(err)
    }
})
}

function deleteTask(id) {
    $.ajax({
        type: "DELETE",
        url: `${API_URL}/${id}`,   
        success: function(response) {
            console.log("Task deleted:", response);
            $(`#task-${id}`).remove();           
        },
        error: function (err) {
            console.log("Delete error:", err);
        }
    });
}

function displayTask(task) {
    const html = `

     <div class="task" style="border: 3px solid ${task.color}; padding:10px; margin:5px;">

    <div class="info">
        <h4>${task.title}</h4>
        <p>${task.description}</p>
    </div>

    <div class="date">
        <label>${task.date}</label>
         </div>

             <label class="status">${task.status}</label>
<div>
        <label>${task.budget}</label>
        </div>

        </div>
   

    <button class="btn-delete" onclick="deleteTask(${task.id})">Delete</button>
</div>
`;
    $(".list").append(html);
}
//test connection to the API
function testRequest() {
    $.ajax({
        type: "get",
        url: "https://106api-b0bnggbsgnezbzcz.westus3-01.azurewebsites.net/api/tasks",
        sucess: function (response) {
            console.log("API Response:", response)
        },
        error: function (error) {
            console.log("Error:", error);
        }
    });
}




function init() {
    $('#btnSave').click(saveTask);
    loadTask();
}

window.onload = init;

