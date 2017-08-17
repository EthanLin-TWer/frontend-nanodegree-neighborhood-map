import ko from 'knockout';
import './index.styl';

class Index {
  constructor() {
    this.firstName = ko.observable('Gasai');
    this.lastName = ko.observable('Yuno');
  }

  get fullName() {
    return `${this.firstName()} ${this.lastName()}`;
  }
}

ko.applyBindings(new Index());