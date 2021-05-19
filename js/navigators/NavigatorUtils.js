
export default class NavigatorUtils {

  static goToPage(params,pageName){
    const navigation = NavigatorUtils.navigation;
    if (!navigation){
      console.log('NavigatorUtils.navigation is null');
    }
    navigation.navigate(pageName,{params});
  }


  /**
   * 重置到首页
   * @param props
   */
  static resetToHomePage(props){
    props.navigation.navigate('mainNavi')
  }
}
