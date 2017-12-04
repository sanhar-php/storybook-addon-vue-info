import constructorToString from './utils/constructorToString'

import { RuntimeComponentOptions } from './types/VueRuntime'
import PropInfo from './types/PropInfo'

/**
 * Get properties informations from component instance.
 * @param component Runtime component instance
 */
function getPropsInfoList(component: RuntimeComponentOptions): PropInfo[] {
  const { props } = component

  if (!props) {
    return []
  }

  return Object.keys(props).map(name => {
    const prop = (props as any)[name]

    return {
      name,
      type: constructorToString(prop.type),
      required: !!prop.required,
      default: prop.default
    }
  })
}

export default getPropsInfoList
