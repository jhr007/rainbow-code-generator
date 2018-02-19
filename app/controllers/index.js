import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  test: "yea",
  randomColor: computed( {
    get: function() {
      var colors = this.get('model').colors;
      var random = Math.floor((Math.random() * (colors.length + 1)));
      return colors[random];
    },
  })
});
