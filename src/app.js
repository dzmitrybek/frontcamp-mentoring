import 'root/assets/style.scss'

import AppPresenter from 'root/src/app/AppPresenter';
import AppView from 'root/src/app/AppView';
import AppModel from 'root/src/app/AppModel';

const appView = new AppView();
const appModel = new AppModel();
const appPresenter = new AppPresenter(appView, appModel);

appPresenter.init();
