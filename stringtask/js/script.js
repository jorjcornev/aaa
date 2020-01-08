const getReverseString = () => {
  let string = jsConsole.read('#reverse');
  let reverse = ('' + string).split('').reverse().join('');
  jsConsole.write(`Reverse string: ${reverse} <br>`);
};

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
