//nested loops in javascript


var n = 10
for(var i = 1; i<=n; i++){
    var test = ''
    for(var j = 1; j<=i; j++){
        test  += j + ''
    }
    console.log(test)
}

//another nested loops example

var n = 10
for(var i =1; i<=n; i++){
    var test = ''
    for(var h =1; h<=n; h++){
        test += '* '
    }
    console.log(test)
}