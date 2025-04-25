// Trocar valores de 2 posições em um vetor
const swap = (array, firstPosition, secondPosition) => {
  [array[firstPosition], array[secondPosition]] = [array[secondPosition], array[firstPosition]];
}

// embaralhar os elementos de um vetor
const shuffle = (array, numOfChanges) => {

}

// ordenar um vetor de inteiros com o algoritmo Bubble Sort
const bubble_sort = (iArray) => {
  for(let i = 0; i < iArray.length - 1; i++) {
    for(let j = 0; j < iArray.length - 1 - i; j++) {
      if(iArray[j] > iArray[j+1]) {swap(iArray, j, j+1)};
    }
  }

}

// ordenar um vetor de inteiros utilizando o algoritmo Selection Sort
const selection_sort = (iArray) => {
  
}

// ordenar um vetor de inteiros com o algoritmo Quick Sort
const quick_sort = (iArray, initPosition, finalPosition) => {
  
}

//  apoio a quick_sort()
const particionamento = (iArray, initPosition, finalPosition, pivot) => {
  
}

function add() {
  const input = document.getElementById('valor');

  if(input.value === "") {
    return;
  }

  const list = document.getElementById('valores');
  const nodeList = document.createElement('li');
  const text = document.createTextNode(input.value);
  
  nodeList.appendChild(text);
  list.appendChild(nodeList);
}

function order() {
  const list = document.getElementById('valores');
  const sortingTypeSelection = document.getElementById('SortTypeSelection');
  const numbers = Array.from(list.children).map((li) => eval(li.innerHTML));

  switch (sortingTypeSelection.selectedIndex) {
    case 0:
      bubble_sort(numbers);
      break;
    case 1: 
      selection_sort(numbers);
      break;
    case 2:
      quick_sort(numbers, 0, numbers.length-1); 
      break;
  }

  list.innerHTML=numbers
    .map((num) => `<li>${num}</li>`)
    .reduce((acc, li) => acc + li, '');
}

function mix() {
  const list = document.getElementById('valores');
  const numbers = Array.from(list.children).map((li) => eval(li.innerHTML));

  shuffle(numbers);

  list.innerHTML = numbers
    .map((num) => `<li>${num}</li>`)
    .reduce((acc, li) => acc + li, '');
}