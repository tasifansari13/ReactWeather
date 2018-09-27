function getTemoCallback(location, callback) {
callback(undefined, 78);
callback('City not found');
}

getTemoCallback('India', function(err, temp) {
  if(err) {
    console.log('Error', err);
  } else {
    console.log('Success', temp);
  }
});

function getTempPromise(location) {
  return new Promise(function(resolve, reject) {
    resolve(79);
    reject('City not found');
  });
}

getTempPromise('India').then(function(temp) {
console.log('Promise success', temp);
}, function(err) {
console.log('Promise error', err);
})
