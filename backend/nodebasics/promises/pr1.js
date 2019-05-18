//Create a Promise function which takes two arguments : a string and a boolean - true if there is an error
//false if there is not
//Resolve the string to upper case and reject it if there is an error with a message: "Error occured!"
//return the output after 0.5 seconds of delay

let prfn = function(a, error) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!error) {
        resolve(a.toUpperCase());
      } else {
        reject("Error occured!");
      }
    }, 500);
  });
};
module.exports.prfn = prfn;
