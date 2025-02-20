// Function - Random Argument Challenge
function showUserInformation(a, b, c) {
    let userName = "Not Found";
    let age = 0;
    let status;

    let available = "You Are Available For Hire";
    let notAvailable = "You Are Not Available For Hire";

    // Check Variables Type.
    typeof a === "string" ? userName = a : typeof a === "number" ? age = a : status = a;
    typeof b === "string" ? userName = b : typeof b === "number" ? age = b : status = b;
    typeof c === "string" ? userName = c : typeof c === "number" ? age = c : status = c;

    // Check Status Is Hire Available OR Hire Not Available.
    status === true ? status = available : status === false ? status = notAvailable : status = "Not Found";

    // Print Information Users Order Different Positions.
    console.log(`Hello ${userName}. Your Age Is [${age}]. Status: ${status}.`);
}

showUserInformation("Hesham", 25, true);
showUserInformation(11, "Mohammed", false);
showUserInformation(true, 24, "Yaseen");
showUserInformation(true, "Zohir", 42);
showUserInformation(50);
showUserInformation("Hesham");