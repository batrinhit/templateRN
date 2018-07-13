import { RootNavigator } from '../navigators/RootNavigator';
export default (state, action) => {
    const newState = RootNavigator.router.getStateForAction(action, state);
    return newState || state;
};