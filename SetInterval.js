/*
🚀 Next Topic: setInterval()
What is setInterval?

setInterval() runs a function repeatedly after a fixed time interval.
*/

const employees = [
  {
    id: 101,
    name: "Rahul Sharma",
    department: "Engineering",
    status: "Online"
  },
  {
    id: 102,
    name: "Priya Singh",
    department: "HR",
    status: "Online"
  },
  {
    id: 103,
    name: "Amit Kumar",
    department: "Marketing",
    status: "Away"
  },
  {
    id: 104,
    name: "Sneha Verma",
    department: "Finance",
    status: "Online"
  }
];

/*
;
🏢 INTERVAL-101
Employee Status Monitor

Create:

function monitorEmployees(employees) {

}
Expected Output

Every 2 seconds:

Checking Employee Status...

Rahul Sharma - Online
Priya Singh - Online
Amit Kumar - Away
Sneha Verma - Online
*/

const workers = [
  { id: 101, name: "Rahul Sharma", department: "Engineering", status: "Online" },
  { id: 102, name: "Priya Singh", department: "HR", status: "Online" },
  { id: 103, name: "Amit Kumar", department: "Marketing", status: "Away" },
  { id: 104, name: "Sneha Verma", department: "Finance", status: "Online" }
];

function countOnlineEmployees(workers) {
  setInterval(() => {
    const onlineCount = workers.filter(emp => emp.status === "Online").length;
    console.log(`Online Employees: ${onlineCount}`);
  }, 3000);
}


function mointerEmployees(employees){
  console.log(`Checking Employees Status...`);

  let index = 0;

  const intervalId = setInterval(()=> {
    const emp = employees[index];
    console.log(`${emp.name} (${emp.department}) - ${emp.status}`);

    index++;

    if(index >= employees .length){
      clearInterval(intervalId)
    }
  },2000)
}

mointerEmployees(employees);
countOnlineEmployees(workers);


/*
🏢 INTERVAL-104 (Interview Level)
Live Attendance Dashboard

Dataset:


Create:

function attendanceDashboard(attendance) {


}
Expected Output

Every 2 seconds:

Present: 38
Absent: 4
*/

const attendance = {
  present: 38,
  absent: 4
};


function attendanceDashboard(attendance) {
  console.log(`Here is Info About Today...`);

  const intervalId = setInterval(() => {
    console.log(`Present : ${attendance.present}`);
    console.log(`Absent : ${attendance.absent}`);
  }, 2000);

  setTimeout(() => {
    clearInterval(intervalId);
    console.log(`Dashboard Stopped....`);
  }, 10000); // stop after 10 seconds, so it logs ~5 times first
}

attendanceDashboard(attendance);

/*
🏢 INTERVAL-105 (Company Level)
Session Countdown

Create:

function sessionTimer(seconds) {


}

If called with:

sessionTimer(10);

Expected Output:

10
9
8
7
6
5
4
3
2
1
Session Expired

The interval must stop automatically when the countdown ends.
*/

function sessionTimer(seconds){
  console.log(`Starting Session Timer....`);

  let remaining = seconds;

  const intervalPass = setInterval(() => {
    console.log(`${remaining}`);
    remaining--;

    if(remaining < 0 ){
      clearInterval(intervalPass);
      console.log(`Session Expired....`);
    }
  }, 2000);
}

sessionTimer(10);

