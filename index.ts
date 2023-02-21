const str = "Naam: Zalando SE Omschrijving: 10203054191412 ZALANDO SE IBAN: DE86210700200123010101 Kenmerk: 010801455442 Valutadatum: 27-12-2018"
const splittedString = str.split('');
const dict = {};

const findNextColon = (str: string[]) => {
  return str.indexOf(":")
}

const findNextKey = (colonIndex: number, str: string[]) => {
  const stringWithKey = str.splice(0, colonIndex);

  return stringWithKey.reduce((key, char, index) => {
    if (key !== " ") {
      return `${key}${char}`;
    }

    return key;
  }, '').toLowerCase();
}

const findValue = (str: string[], ) => {

}

const keys = [];
const substract = (str: string) => {
  const splittedString = str.split('');

  const colonIndex = findNextColon(splittedString);
  const key = findNextKey(colonIndex, splittedString);
  const newString = str.substr(colonIndex + 1, str.length);

  keys.push(key);
  
  if (newString.length > 0) {
    substract(newString);
  }
}

console.log(substract(str));
