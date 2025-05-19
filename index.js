import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer.prompt([
    {
        name: "URL",
        message: "Enter your url to generate QR code",
    },
]).then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_image.png"));
    
}).catch((err) => {
    if(err.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
        // Prompt couldn't be rendered in the current environment
    } else {
        // Something else went wrong
        console.log(err);
    }
}); 
