const myDiv = document.createElement('myDiv');
document.body.append(myDiv);
const numberOfRows = 5;

for (let i = 1; i <= numberOfRows; i++) {
  const header = document.createElement(`h${6-i}`);
  myDiv.appendChild(header);
  
  const hue = 120 + 20*(i-1);
  
  header.style.background = `hsl(${hue}, 90%, 85%)`;
  header.innerText = `Rad ${i}`;
  header.style.color = 'hsl(240, 90%, 70%)';
  header.style.textAlign = 'center';
}

  
  const ul = document.createElement('ul')
  const ulSecond = document.createElement('ul')
  const ulThird = document.createElement('ul')
  ul.style.padding = '10px'
  ul.style.width = "2rem"
  ul.style.margin = '10px'
  ul.style.background = 'hsl(240, 71%, 80%)'
  
  
  ulSecond.style.padding = '10px'
  ulSecond.style.width = "2rem"
  ulSecond.style.margin = '10px'
  ulSecond.style.background = 'hsl(240, 71%, 80%)'
  ulSecond.style.textAlign = 'center'
  
  ulThird.style.padding = '10px'
  ulThird.style.margin = '10px'
  ulThird.style.width = "2rem"
  ulThird.style.background = 'hsl(240, 71%, 80%)'
  ulThird.style.textAlign = 'right'
  
  const box = document.createElement('div');
  box.id = "box";
  box.style.border = '1px solid black';
  box.style.padding = '10px';
  box.style.display = 'flex';
  box.style.justifyContent = 'space-evenly';
  document.body.append(box);
  
  box.append(ul)
  box.append(ulSecond)
  box.append(ulThird)
  
 
  
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  console.log(numbers);
  
  const siffror = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];
  console.log(siffror);
  
  for (let i = 0; i < numbers.length; i++) {
    const li = document.createElement('li');
    ul.append(li);
    li.innerText = numbers[i];
    li.style.listStyle = 'none';
    li.style.backgroundColor = 'white';
  
    if (i % 2 == 0) {
      console.log(i);
      li.style.backgroundColor = 'black';
      li.style.color = 'white';
    }
  
    if (i == 4) {
      li.style.background = 'hsl(240, 71%, 80%)';
    }
  }
  
  for (let i = 9; i > -1; i--) {
    const li = document.createElement('li');
    ulSecond.append(li);
    li.innerText = numbers[i];
    li.style.listStyle = 'none';
    li.style.backgroundColor = 'white';
    li.style.alignItems = 'center'
  
    if (i % 2 == 0) {
      console.log(i);
      li.style.background = 'black';
      li.style.color = 'white'
    }
  
    if (i == 8) {
      li.style.background = 'hsl(240, 71%, 80%)';
    }
  }
  
  for (let i = 0; i < siffror.length; i++) {
    const li = document.createElement('li');
    ulThird.append(li);
    li.innerText = siffror[i];
    li.style.listStyle = 'none';
    li.style.backgroundColor = 'white';
  
    if (i % 2 == 0) {
      console.log(i);
      li.style.background = 'black';
      li.style.color = 'white'
    }
  
    if (i == 5) {
      li.style.background = 'hsl(240, 71%, 80%)';
    }
  }