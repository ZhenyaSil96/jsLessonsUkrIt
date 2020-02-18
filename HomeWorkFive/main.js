function sampleFunc() {
  console.log(`${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}`);
}

function modificator(func) {
  return function() {
    func.call(null, "test", "sample");
  };
}

testFunc = modificator(sampleFunc);
testFunc();

//DZ2
function sampleFunc() {
  console.info(`Symbols in my code: ${arguments.callee + 0}`);
}

function modificator(func) {
  return function() {
    func.valueOf = function() {
      return func.toString().length;
    };
  };
}

modificator(sampleFunc);
sampleFunc();

//DZ3
function testArguments () {
    function generateError ( numArgs ) {
        throw({
            name:"Application",
            message:" Invalid arguments",
            stack:"Function needs 3 arguments, but only 1 present"

        })
    }
    try {
        arguments.length >= 3 ? null : generateError ( arguments.length )
    }
    catch ( err ) {
        console.error ( `${err.name}: ${err.message}\n${err.stack}` )
    }
}

testArguments ( "Google" )
