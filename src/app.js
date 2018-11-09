import AppController from './AppController';
import AppView from './AppView';
import AppModel from './AppModel';

const appView = new AppView();
const appModel = new AppModel();
const appController = new AppController({ appView, appModel });

appController.init();
