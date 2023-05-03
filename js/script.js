if (innerText = 'Rad 1') {
    const h6 = document.createElement('h6');
    document.body.append(h6);
    h6.style.background = 'hsl(121, 90%, 85%)';
    h6.innerText = 'Rad 1';
    h6.style.color = 'hsl(240, 90%, 70%)';
    h6.style.textAlign = 'center';
  }
  
  if (innerText = 'Rad 2') {
    const h4 = document.createElement('h4');
    document.body.append(h4);
    h4.style.background = 'hsl(141, 90%, 85%)';
    h4.innerText = 'Rad 2';
    h4.style.color = 'hsl(240, 90%, 70%)';
    h4.style.textAlign = 'center';
  }
  
  if (innerText = 'Rad 3') {
    const h3 = document.createElement('h3');
    document.body.append(h3);
    h3.style.background = 'hsl(160, 90%, 85%)';
    h3.innerText = 'Rad 3';
    h3.style.color = 'hsl(240, 90%, 70%)';
    h3.style.textAlign = 'center';
  }
  
  if (innerText = 'Rad 4') {
    const h2 = document.createElement('h2');
    document.body.append(h2);
    h2.style.background = 'hsl(180, 90%, 85%)';
    h2.innerText = 'Rad 4';
    h2.style.color = 'hsl(240, 90%, 70%)';
    h2.style.textAlign = 'center';
  }
  
  if (innerText = 'Rad 5') {
    const h1 = document.createElement('h1');
    document.body.append(h1);
    h1.style.background = 'hsl(201, 90%, 85%)';
    h1.innerText = 'Rad 5';
    h1.style.color = 'hsl(240, 90%, 70%)';
    h1.style.textAlign = 'center';
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