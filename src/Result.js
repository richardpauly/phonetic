import React, { Component } from 'react';
const nato = {
  a: 'alfa',
  b: 'bravo',
  c: 'charlie',
  d: 'delta',
  e: 'echo',
  f: 'foxtrot',
  g: 'golf',
  h: 'hotel',
  i: 'india',
  j: 'juliett',
  k: 'kilo',
  l: 'lima',
  m: 'mike',
  n: 'november',
  o: 'oscar',
  p: 'papa',
  q: 'quebec',
  r: 'romeo',
  s: 'sierra',
  t: 'tango',
  u: 'uniform',
  v: 'victor',
  x: 'x-ray',
  y: 'yankee',
  z: 'zulu',
  å: 'alfa with a ring above',
  ä: 'alfa with two dots above',
  ö: 'oscar with two dots above'
};
const swedish = {
  a: 'adam',
  b: 'bertil',
  c: 'cesar',
  d: 'david',
  e: 'erik',
  f: 'filip',
  g: 'gustav',
  h: 'helge',
  i: 'ivar',
  j: 'johan',
  k: 'kalle',
  l: 'ludvig',
  m: 'martin',
  n: 'niklas',
  o: 'olof',
  p: 'petter',
  q: 'qvintus',
  r: 'rudolf',
  s: 'sigurd',
  t: 'tore',
  u: 'urban',
  v: 'viktor',
  x: 'xerxes',
  y: 'yngve',
  z: 'zäta',
  å: 'åke',
  ä: 'ärlig',
  ö: 'östen'
};

const adamBerit = {
  a: 'adam',
  b: 'berit',
  c: 'cesar',
  d: 'doris',
  e: 'emir',
  f: 'fanny',
  g: 'gustav',
  h: 'hedvig',
  i: 'ivar',
  j: 'jenny',
  k: 'khaled',
  l: 'laila',
  m: 'matti',
  n: 'nora',
  o: 'olof',
  p: 'pippi',
  q: 'qvintus',
  r: 'robin',
  s: 'sigurd',
  t: 'tyra',
  u: 'ulrik',
  v: 'vicky',
  x: 'xena',
  y: 'yngve',
  z: 'zelda',
  å: 'åke',
  ä: 'ängel',
  ö: 'östen'
};
class Result extends Component {
  translate(text, method) {
    if (!text)
      return [];
    const result = [];
    if (method === 'swedish') {
      text.split('').forEach(character => {
        result.push(this.translateCharToSwedish(character));
      });
    }
    else if (method === 'adamBerit') {
      text.split('').forEach(character => {
        result.push(this.translateCharToAdamBerit(character));
      });
    } else {
      text.split('').forEach(character => {
        result.push(this.translateCharToNato(character));
      });
    }
    return result;
  }

  translateCharToNato(character) {
    if (/^[a-zA-ZåäöÅÄÖ]$/.test(character)) {
      return nato[character.toLowerCase()];
    }
    switch (character) {
      case '1': return 'one';
      case '2': return 'two';
      case '3': return 'three';
      case '4': return 'four';
      case '5': return 'five';
      case '6': return 'six';
      case '7': return 'seven';
      case '8': return 'eight';
      case '9': return 'nine';
      case '0': return 'zero';
      case '-': return 'dash';
      case '_': return 'underscore';
      case '.': return 'period';
      case ',': return 'comma';
      case '+': return 'plus';
      case ' ': return '(space)';
      case '!': return 'exclamation mark';
      case '#': return 'hashtag';
      case '"': return 'double quote';
      case '$': return 'dollar sign';
      case '%': return 'percent';
      case "'": return 'single quote';
      case '(': return 'left paranthesis';
      case ')': return 'right paranthesis';
      case '*': return 'asterisk';
      case '&': return 'ampersand';
      case '/': return 'slash';
      case ':': return 'colon';
      case ';': return 'semicolon';
      case '<': return 'less than';
      case '=': return 'equal sign';
      case '>': return 'greater than';
      case '?': return 'question mark';
      case '@': return 'at sign';
      case '[': return 'left bracket';
      case '\\': return 'backslash';
      case ']': return 'right bracket';
      case '^': return 'caret';
      case '{': return 'left brace';
      case '|': return 'vertical bar';
      case '}': return 'right brace';
      case '~': return 'tilde';
      case '`': return 'grave accent';
      case '¤': return 'currency sign';
      case '§': return 'section sign';
      default: return character;
    }
  }

  translateCharToAdamBerit(character) {
    if (/^[a-zA-ZåäöÅÄÖ]$/.test(character)) {
      return adamBerit[character.toLowerCase()];
    }
    return this.translateSpecialCharacterToSwedish(character);
  }

  translateSpecialCharacterToSwedish(character) {
    switch (character) {
      case '1': return 'ett';
      case '2': return 'tvåa';
      case '3': return 'trea';
      case '4': return 'fyra';
      case '5': return 'fema';
      case '6': return 'sexa';
      case '7': return 'sjua';
      case '8': return 'åtta';
      case '9': return 'nia';
      case '0': return 'nolla';
      case '-': return 'bindestreck';
      case '_': return 'understräck';
      case '.': return 'punkt';
      case ',': return 'komma';
      case '+': return 'plus';
      case ' ': return '(mellanslag)';
      case '!': return 'utropstecken';
      case '#': return 'hashtag';
      case '"': return 'double quote';
      case '$': return 'dollartecken';
      case '%': return 'percent';
      case "'": return 'single quote';
      case '(': return 'vänsterparantes';
      case ')': return 'högerparantes';
      case '*': return 'asterisk';
      case '&': return 'och-tecken';
      case '/': return 'snedstreck';
      case ':': return 'kolon';
      case ';': return 'semikolon';
      case '<': return 'mindre än';
      case '=': return 'lika med-tecken';
      case '>': return 'större än';
      case '?': return 'frågetecken';
      case '@': return 'snabel-a';
      case '[': return 'vänster hakparantes';
      case '\\': return 'backslash';
      case ']': return 'höger hakparantes';
      case '^': return 'caret';
      case '{': return 'vänster måsvinge';
      case '|': return 'lodrät streck';
      case '}': return 'höger måsvinge';
      case '~': return 'tilde';
      case '`': return 'grav accent';
      case '¤': return 'sol';
      case '§': return 'paragraf';
      default: return character;
    }
  }

  translateCharToSwedish(character) {
    if (/^[a-zA-ZåäöÅÄÖ]$/.test(character)) {
      return swedish[character.toLowerCase()];
    }
    return this.translateSpecialCharacterToSwedish(character);
  }

  render() {
    return (
      <div className='result'>
        {this.translate(this.props.text, this.props.method).map((word, index) => <div key={index} className='resultWord'>{word}</div>)}
      </div>
    );
  }
}

export default Result;