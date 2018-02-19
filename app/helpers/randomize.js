import { helper } from '@ember/component/helper';

export function randomize([array]/*, hash*/) {
  var random = Math.floor(Math.random() * array.length);
  var value = array[random];;
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export default helper(randomize);
