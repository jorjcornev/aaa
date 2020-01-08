const getLastInEnglish = () => {
	let string = jsConsole.read('#last-english');
	let array = string.split('').map(Number);
	let words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
	let word = words[array[array.length-1]];
	jsConsole.write(`${word} <br>`);
};

const reverseNumber = () => {
	let string = jsConsole.read('#reverse-number').split('').reverse().join('');
	jsConsole.write(`${string} <br>`);
}

const findWord = () => {
	let str = jsConsole.read('#finding-word')
	let target = jsConsole.read('#input-text');
	let pos = 0;
		while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;
  jsConsole.write( `Find position: ${foundPos} <br>` );
			pos = foundPos + 1; 
		}
}

const findDivNumbers = () => {
	const html = document.documentElement.outerHTML;
	let numDiv = 0;
	let pos = 0;
		while (true) {
  		let foundPos = html.indexOf("<div", pos);
  		if (foundPos == -1) break;
  		numDiv++;
  		pos = foundPos + 1; // продолжаем со следующей позиции
		}
	jsConsole.write(`Number of div: ${numDiv} <br>`);
}

const findCountOfNumber = () => {
	let number = parseInt(jsConsole.read('#finding-number'));
	let array = jsConsole.read('#current-array').split(' ').map(Number);
	let count = 0;
	for (let i=0 ; i<array.length; i++) {
		if (array[i] == number) {
			count++;
		}
	}
	jsConsole.write(`Count of number: ${count} <br>`);
	jsConsole.write(`Subtract of count and testing count: ${count-testFindCountOfNumber(number, array)} <br>`);
}

const testFindCountOfNumber = (number, array) => {
	return array.filter(x => x==number).length;
}

const moreThanNeighbours = () => {
	let array = jsConsole.read('#current-array').split(' ').map(Number);
	let position = parseInt(jsConsole.read('#position'));
	if (position == 0) {
		jsConsole.write(`Left neighbour is not exist <br>`);
	} else if (position == array.length-1) {
		jsConsole.write(`Right neighbour is not exist <br>`);
	} else {
		if (array[position] > array[position+1] && array[position] > array[position-1]) {
			jsConsole.write(`Max element of neighbour <br>`);
		} else {
			jsConsole.write(`Not max element of neighbour <br>`);
		}
	}
}

const firstMoreThanNeighbours = () => {
	let array = jsConsole.read('#current-array').split(' ').map(Number);
	if (array[1] > array[2] && array[1] > array[0]) {
		jsConsole.write(`1`);
	} else {
		jsConsole.write(`-1`);
	}
}

const checkBrackets = () => {
  let expression = jsConsole.read('#brackets');
  let count = 0;

  for (let i = 0; i <= expression.length; i++) {
    if (expression[i] === '(') {
      count++;
    } else if (expression[i] === ')') {
      count--;
    }
  }

  if (count === 0) {
    return jsConsole.write(`true <br>`);
  } else {
    return jsConsole.write(`false <br>`);
  }
};


const getCountSubstring = () => {
  let text = jsConsole.read('textarea');
  let substring = jsConsole.read('#substring');
  let array = text.split(substring);

  let count = array.length;

  if ((count === -1) && (text.length === 0)) {
    return jsConsole.write(`The text is missing. <br>`);
  }
  jsConsole.write(`The substring "${substring}" is contained ${count} times in the text. <br>`);
};

const upCaseLowerCase = () => {
  let expression = jsConsole.read('#text');

  function upcase(params) {
    text = params.replace(/<upcase>(.+?)<\/upcase>/g, (match, contents) => {
      return contents.toUpperCase();
    });
    return text;
  }

  let upperCase = (upcase(expression));

  function mixcase(params) {
    text = params.replace(/<mixcase>(.+?)<\/mixcase>/g, (match, contents) => {
      return rev(contents);

      function rev(contents) {
        var contents = Array.prototype.map.call(contents, (letter) => {
          return Math.random() > .5 ? letter.toUpperCase() : letter;
        }).join("");
        return contents;
      }
    });
    return text;
  }

  let mixx = (mixcase(upperCase));

  function lowcase(mixx) {
    text = mixx.replace(/<lowcase>(.+?)<\/lowcase>/g, function (match, contents) {
      return contents.toLowerCase();
    });
    return text;
  }
  jsConsole.writeLine((lowcase(mixx)));
};

const nbsp = () => {
  let text = jsConsole.read('textarea');
  let nbsp = '&nbsp;';

  if (text.length === 0) {
    return jsConsole.write(`The text is missing. <br>`);
  }

  jsConsole.write(`${text.replace(/ /g, `${nbsp}`)} <br>`);
};
