//Visually I want is a button to click to pick random item from the list.. cool loading screen.. then animated presentation of th elist item picked

// Logically.. I will have a list (that at first is hard coded but I would like a way to have inputs later on).. so hard coded list of items... on button click choose random item.

//so in order to implement this, I gues wee could start with an array... and then figure out how to randomize it...

//it needs to be smart though.. did I choose this item already? How do go about saving this to a server? login accounts? Save my data!






$(document).ready(function() {
    var ListArray = ["For mason jar options", "Watercolor", "Sketching people", "Acrylic painting class", "Drive to thrift store", "Drive to decor store", "Rasberry PI Get home cloud working", "Rasberry PI Get web server working", "Work on power app certification", "Read a book", "Call somebody", "Text somebody", "Walk to mall/ home workout / yoga if bad weather", "Just walk", "Write a thank you letter", "Free write", "Write a poem", "Drive to michaels for string and needle for paper cranes project", "Paper crane project", "Water color paint something for bedroom frame", "Find a job you want to apply to and cater your resume", "Walk to art gallery", "Work on web version of this system", "Take a trip to oak grove", "Play switch"];

    var item = ListArray[Math.floor(Math.random()*ListArray.length)];

    console.log(item);

    html
});



