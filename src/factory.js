import Skeleton from './skeleton.js';
import helper from './helper.js';

/**
 * Return a constructor for your custom chart type
 * @param  Object        defaultOptions default options for your chart
 * @param  Array[String] customEvents   list of custom events this chart will dispatch
 * @param  Function      constructor    constructor function function(skeleton){...}
 * @return Function                     function(chartNode, options) that return your chart
 */
export function createChart(defaultOptions, customEvents, constructor) {
  const newChartClass = function (chartNode, options) {
    const skeleton = new Skeleton(chartNode, helper.deepExtend({}, defaultOptions, options), customEvents);
    if (constructor) constructor(skeleton);
    return skeleton;
  };

  customEvents = customEvents ? customEvents : [];

  /**
   * Return supported custom events for this chart class.
   * This is a static method for class, not instance method.
   * @return Array[String] names of custom events
   */
  newChartClass.getCustomEvents = function () {
    return customEvents;
  };

  return newChartClass;
}
