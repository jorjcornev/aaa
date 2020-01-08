const arrays = () => {

  let array = [];

  for (let i = 0; i < 20; i++) {
    array.push(getRandom(-50, 50));
  }

  document.getElementById("array").innerHTML = `Входной массив: ${array}`;

  change(array);
};

const change = (array) => {
  array.forEach(item => {
    return jsConsole.write(`${item * 5}, `);
  });
};

const compare = () => {
  let first_array = jsConsole.read('#first_array');
  let second_array = jsConsole.read('#second_array');

  let coincidence = 0;

  let cache, cache2;

  let ln1 = first_array.length;
  let ln2 = second_array.length;

  for (let i = 0; i < ln1; ++i) {
    cache = first_array[i];
    for (let j = i; j < ln2; ++j) {
      cache2 = second_array[j];
      if (cache === second_array[j]) {
        coincidence += 1;
        jsConsole.write(`Найдено совпадение: ${cache} <br>`);
        break;
      } else break;
    }
  }
  if (coincidence !== first_array.length || coincidence !== second_array.length) {
    jsConsole.write(`Полного совпадения нет <br>`);
  } else {
    jsConsole.write(`Полное совпадение <br>`);
  }
  jsConsole.write(`Число совпадений ${coincidence} <br>`);
};

const findEqual = () => {

  let numbers = jsConsole.read('#equal');
  let array = numbers && numbers.split(',').map(item => Number(item));

  let count = 1;
  let e = -1;
  let max = -1;
  let pos = -1;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1]) {
      count++;
      if (max < count) {
        max = count;
        pos = i;
        e = array[i];
      }
    } else {
      count = 1;
    }
  }
  jsConsole.write(`Максимальная последовательность: ${max} <br> `);
  jsConsole.write(`Массив: ${Array(max).fill(e)}`);

};

const order = () => {
  let numbers = jsConsole.read('#order');
  let array = numbers && numbers.split(',').map(item => Number(item));

  const max_sequence = () => {
    let seq_arr = [array[0]];
    let tmp_arr = [array[0]];
    for (let i = 1; i < array.length; i++) {
      if (array[i] >= array[i - 1]) {
        tmp_arr.push(array[i]);
      } else {
        if (tmp_arr.length > seq_arr.length) {
          seq_arr = tmp_arr;
        }
        tmp_arr = [array[i]];
      }
    }
    if (tmp_arr.length > seq_arr.length) {
      seq_arr = tmp_arr;
    }
    return seq_arr;
  };

  jsConsole.write(`Максимальная последовательность: ${max_sequence(array)}`);

};

const sort = () => {
  let numbers = jsConsole.read('#sort');
  let array = numbers && numbers.split(',').map(item => Number(item));

  const compareNumeric = (a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
  };
  let arr_sort = (array.sort(compareNumeric));
  jsConsole.write(`${arr_sort} <br>`);
};

const findCountMax = () => {
  let numbers = jsConsole.read('#array_numbers');
  let number;
  let count = 1;
  let max;

  let array = numbers && numbers.split(',');

  number = array[0];
  for (let i = 0; i < array.length - 1; i++) {
    max = 1;
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        max++;
      }
    }
    if (max > count) {
      count = max;
      number = array[i];
    }
  }

  jsConsole.write(`Частое число: ${number} <br> Количество: ${count}`);
};

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
