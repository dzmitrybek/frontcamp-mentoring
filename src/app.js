import 'root/assets/style.scss'

import AppController from 'root/src/app/AppController';
import AppView from 'root/src/app/AppView';
import AppModel from 'root/src/app/AppModel';

const appView = new AppView();
const appModel = new AppModel();
const appController = new AppController(appView, appModel);

appController.init();
