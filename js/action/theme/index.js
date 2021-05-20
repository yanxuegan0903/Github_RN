
import Types from '../../../js/action'

export function onThemeChange(theme){
  return {type:Types.THEME_CHANGE,theme:theme};
}
