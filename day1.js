// aoc day 1
fs = require('fs')
fs.readFile('day1_input.txt', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    var data = data.split("\n");
    var increased = data.reduce(
        (previousValue, currentValue, currentIndex) => {
            if (parseInt(data[currentIndex - 1]) < parseInt(currentValue)) {
                return previousValue + 1;
            }
            return previousValue + 0
        }, 0
    )
    console.log(increased);
    var increased = data.reduce(
        (previousValue, currentValue, currentIndex) => {
            let A = parseInt(data[currentIndex - 1]);
            let B = parseInt(currentValue);
            A += B;
            for (let indexplus = 1; indexplus < 3; indexplus++) {
                if (typeof data[currentIndex + indexplus] != 'undefined') {
                    if (indexplus == 1)
                        A += parseInt(data[currentIndex + indexplus])
                    B += parseInt(data[currentIndex + indexplus])
                }
            }
            if (A < B) {
                return previousValue + 1;
            }
            return previousValue + 0
        },0
    )
    console.log(increased);
});

/*
 * part 1 write 1
 * 
let increased = 0;
for(let i=0;i<sampledata.length;i++){
  if(typeof sampledata[i-1] != 'undefined'){
    if(sampledata[i-1] > sampledata[i]){
      changes.push('decreased')
    }else if(sampledata[i-1] < sampledata[i]){
      changes.push('increased')
      increased++;
    }else{
      changes.push('none')
    }
  }else{
    changes.push('n/a')
  }
}
*/
/*
 * part 1 write 2
let increased = 0;
changes = sampledata.map((number,index)=>{
  if(index){
    if(sampledata[i-1] > number){
      return "decreased";
    }else if(sampledata[i-1] < number){
      increased++;
      return "increased";
    }else{
      return "none";
    }
  }else{
    return "n/a";
  }
});
*/
/* 
 *part 1 write 3
let increased = 0;
sampledata.map((number,index)=>{
  if(index && sampledata[index-1] < number){
    increased++;
  }
});
*/