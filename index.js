//Visually I want is a button to click to pick random item from the list.. cool loading screen.. then animated presentation of th elist item picked

// Logically.. I will have a list (that at first is hard coded but I would like a way to have inputs later on).. so hard coded list of items... on button click choose random item.

//so in order to implement this, I gues wee could start with an array... and then figure out how to randomize it...

//it needs to be smart though.. did I choose this item already? How do go about saving this to a server? login accounts? Save my data!


$(document).ready(function() {

    fetch('listitems.json').then(function(response){
        return response.json();
    }).then(function(json) {
        let items = json;
        initialize(items);
    }).catch(function(err){
        console.log('Fetch problem: ' + err.message);
    });

    function initialize(all) {
        console.log(all);
    }
    //var item = ListArray[Math.floor(Math.random()*ListArray.length)];

    


});



