import AppController from 'app/AppController';
import AppView from 'app/AppView';
import AppModel from 'app/AppModel';

const appView = new AppView();
const appModel = new AppModel();
const appController = new AppController(appView, appModel);

appController.init();
