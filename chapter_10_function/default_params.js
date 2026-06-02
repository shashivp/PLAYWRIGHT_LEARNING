function retry(test_name, retry=3, delay=1000) {
    console.log("retrying", test_name, "upto", retry, "times", "delayed by", delay);

    
}

retry("login_page");  //will take retry and delay default values

retry("regestration_page", 5, 2000);


//this is not available in java