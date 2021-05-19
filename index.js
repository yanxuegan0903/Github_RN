/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { SwitchNavi } from "./js/navigators/AppNavigators";
import { createAppContainer } from "react-navigation";

AppRegistry.registerComponent(appName, () => createAppContainer(SwitchNavi));
