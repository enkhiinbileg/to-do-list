document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("button");
    const input = document.getElementById("text");
    const taskList = document.getElementById("taskList");
    let tasks = [];

    // LocalStorage-с өгөгдөл сэргээх
    if (localStorage.getItem("storedTasks")) {
        tasks = JSON.parse(localStorage.getItem("storedTasks"));
        console.log("Restored tasks:", tasks);

        // Хадгалагдсан даалгавруудыг жагсаалтад нэмэх
        tasks.forEach((task) => addTaskToList(task));
    }

    // Товч дээр дарж даалгавар нэмэх
    addButton.addEventListener("click", () => {
        const taskValue = input.value.trim();

        if (taskValue) {
            tasks.push(taskValue);

            // LocalStorage-д хадгалах
            localStorage.setItem("storedTasks", JSON.stringify(tasks));

            // Жагсаалтад нэмэх
            addTaskToList(taskValue);

            // Оролтын утгыг цэвэрлэх
            input.value = "";
        } else {
            console.log("Input is empty.");
        }
    });

    // Даалгаврыг жагсаалтад нэмэх функц
    function addTaskToList(task) {
        const li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    }
});
