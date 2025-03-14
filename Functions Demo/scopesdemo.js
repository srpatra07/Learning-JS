function one(){
    const userName = "John"

    function two(){
        const website = "wick.com"
        console.log(`User name is ${userName} and website name is ${website}`);
    }

    // console.log(website); // Error due to scope of website variable
    two()

}

one()