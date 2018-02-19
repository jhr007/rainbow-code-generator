import { helper } from '@ember/component/helper';

export function capitalizeFirst([word]/*, hash*/) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export default helper(capitalizeFirst);
