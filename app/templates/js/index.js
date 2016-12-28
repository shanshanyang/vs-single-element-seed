Polymer({

  is: '<%= elementName %>',

  // Declare properties [https://www.polymer-project.org/1.0/docs/devguide/properties]
  properties: {},

  // Complex Observers [https://www.polymer-project.org/1.0/docs/devguide/observers#complex-observers]
  observers: [],

  // Event Listeners [https://www.polymer-project.org/1.0/docs/devguide/events]
  listeners: {},

  // life cycle callbacks [https://www.polymer-project.org/1.0/docs/devguide/registering-elements#lifecycle-callbacks]
  created () {},
  
  ready () {},

  attached () {},

  detached () {},

  // Called when one of the element's attributes is changed.
  // Use to handle attribute changes that don't correspond to declared properties. (For declared properties, Polymer handles attribute changes automatically as described in attribute deserialization.)
  attributeChanged (name, type) {
    console.log(`${this.localName} + '#' + ${this.id} + ' attribute ' + ${name} + ' was changed to ' + ${this.getAttribute(name)}`);
  },
  
  /*
  * Doc for Custom methods: 
  * Example: name() {},
  */

  /*
  * Doc for Private Custom properties
  * Example: get _name() {},
  */

  /*
  * Doc for Private methods
  * Example: _fullname() {},
  */
});