function addPromise(a, b) {


  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {

      resolve(a + b);
    }else{
      reject('Error Its need to be a number ');

    }
  })
}


addPromise(3, 'hjhjj').then(function (sum) {

    console.log(sum);


}, function (err) {
  console.log("there is an error ", err)

});


//return a promise and add them
//if there are number it will add them
//if not it will give you error
