let name = prompt("What's your name, darling?");
while (!isNaN(name)) {
    name = prompt("Enter your name correctly.");
}

let age = parseInt(prompt(`How old are you ${name}?`));
while (isNaN(age)) {
    age = parseInt(prompt("Enter your age correctly"));
}

if (age < 18) {
    alert("You are not allowed to visit this website");
}

else if (age >= 18 && age <= 22) {
    let confirmation = confirm("Are you sure you want to continue?");

    if (confirmation) {
        alert(`Welcome ${name}`);
    }
    else {
        alert("You are not allowed to visit this website");
    }
}
else {
    alert(`Welcome ${name}`);
}