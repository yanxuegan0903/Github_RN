
export default class NavigatorUtils {
  /**
   * 重置到首页
   * @param props
   */
  static resetToHomePage(props){
    props.navigation.navigate('mainNavi')
  }
}
