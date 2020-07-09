import {NavigationActions} from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

//                                                         navigate() 함수를 사용해 다른 스크린으로 이동할 수 있고 params값을 이용하여 데이터도 주고받을 수 있습니다.
function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

//                                                         back() 함수를 이용하면 이전 스크린으로 돌아갈 수 있습니다.
function back() {
  _navigator.dispatch(NavigationActions.back());
}

export default {
  navigate,
  setTopLevelNavigator,
  back,
};
