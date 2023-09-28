// 3. Color Mixer
// Write a JavaScript program that takes in two strings representing colors and uses a switch statement to
// determine the resulting color when the two colors are mixed. The program should print the resulting color
// based on the following criteria"
//  If color1 is "red" and color2 is "blue" or vice versa, print "purple"P
//  If color1 is "red" and color2 is "yellow" or vice versa, print "orange"P
//  If color1 is "blue" and `color2" is "yellow" or vice versa, print "green"P
//  If any other combination of colors is input, the program should print "Invalid color combination".


function colorMixer(color1, color2){
    switch(color1 + color2){
        case "redblue":
            case "bluered":
                console.log("Purple");
                break;
                
                case "redyellow":
                    case "yellowred":
                        console.log("Orange");
                        break;

                        case "blueyellow":
                            case "yellowblue":
                                console.log("Green");
                                break;

                                default: console.log("Invalid color combination");
    }
}
 

colorMixer("red", "blue");
colorMixer("red", "yellow");
colorMixer("blue", "yellow");
colorMixer("pink", "yellow");
