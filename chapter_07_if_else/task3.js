// Question 1 — HTTP Status Code Categorizer

// Problem: Given an HTTP status code, print which category it belongs to.

// 200–299 → Success

// 300–399 → Redirection

// 400–499 → Client Error

// 500–599 → Server Error

// Anything else → Invalid

let statusCode = 201;

if (statusCode >= 500) {
    console.log("server error");
}

else if (statusCode >= 400) {
    console.log("Client error");
}

else if (statusCode >= 300) {
    console.log("Redirection error");
}

else {
    console.log("success");
}



