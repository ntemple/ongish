'use strict';


/**
 * Quick & dirty implemenation of an Ongish translator.
 * Feel free to improve the implementation and send me a pull request.
 */

/**
 * Determine if the string is ongish.
 *
 * @param text
 */

function isOngish(text) {
  if (text && text.match(/ong-/)) return true;
  return false;

}

/**
 * Add ongs to consonents
 *
 * @param text
 * @returns {string}
 */

function engToOng(text) {

  var newtext = '';

  for (var i = 0; i < text.length; i++) {
    var letter = text.charAt(i);
    var nextletter = '';
    if (i < text.length - 1) {
      nextletter = text.charAt(i + 1);
    }

    if (letter.match(/[a-z]/i)) {
      if (letter.match(/[bcdfghjklmnpqrstvwxyz]/i)) {
        letter += 'ong';
      } else {
        letter = letter.toUpperCase();
      }

      if (nextletter.match(/[a-z]/i)) {
        letter += '-';
      }
    }

    newtext += letter;

  }

  return newtext;

}

/**
 * Strip out our 'ong's so we get some english.
 *
 * @param text
 * @returns {*}
 */

function ongToEng(text) {
  var newtext = text;

  newtext = newtext.replace(/[AEIOU]/g, (vowel) => vowel.toLowerCase() );
  newtext = newtext.replace(/ong/g, '');
  newtext = newtext.replace(/-/g, '');

  return newtext;

}

exports.is = isOngish;
exports.to = engToOng;
exports.from = ongToEng;


