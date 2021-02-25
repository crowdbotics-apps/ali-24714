import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial209527Navigator from '../features/Tutorial209527/navigator';
import NotificationList209499Navigator from '../features/NotificationList209499/navigator';
import Settings209498Navigator from '../features/Settings209498/navigator';
import Settings209490Navigator from '../features/Settings209490/navigator';
import UserProfile209488Navigator from '../features/UserProfile209488/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial209527: { screen: Tutorial209527Navigator },
NotificationList209499: { screen: NotificationList209499Navigator },
Settings209498: { screen: Settings209498Navigator },
Settings209490: { screen: Settings209490Navigator },
UserProfile209488: { screen: UserProfile209488Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
