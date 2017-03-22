import 'aurelia-bootstrapper';
import { Aurelia,PLATFORM } from 'aurelia-framework';

export function configure(aurelia: Aurelia) {
  aurelia.use
         .standardConfiguration()
         .plugin(PLATFORM.moduleName('ag-grid-aurelia'))
         .developmentLogging()
         .globalResources('converters/upper');
  aurelia.start().then(() => aurelia.setRoot());
}