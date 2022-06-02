import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Sales from './pages/Sales';
import Ranking from './pages/Ranking';

const Routes = createAppContainer( createSwitchNavigator({ Login, Sales, Ranking }));
export default Routes;