var katzDeliLine = [];

 function takeANumber(katzDeliLine, name) {
   katzDeliLine.push(name);

   return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
 }

 function nowServing(katzDeliLine) {
    if (katzDeliLine.length >0) {
      return `Currently serving ${katzDeliLine.shift()}.`
    } else {
     return 'There is nobody waiting to be served!'
    }
  }

  function currentLine(katzDeliLine) {
     if (!katzDeliLine.length) {
       return "The line is currently empty."
     }

     var line = []

     katzDeliLine.forEach(function(name, index) {
       var position = index + 1
       line.push(`${position}. ${name}`)
     })

     return `The line is currently: ${line.join(', ')}`
   }
