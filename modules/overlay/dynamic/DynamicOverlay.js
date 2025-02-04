/**
 * @Author: Caven
 * @Date: 2021-05-05 09:16:35
 */

import { Cesium } from '@dc-modules/namespace'
import State from '@dc-modules/state/State'
import Parse from '@dc-modules/parse/Parse'
import { Transform } from '@dc-modules/transform'
import Overlay from '../Overlay'

class DynamicOverlay extends Overlay {
  constructor() {
    super()
    this._startTime = undefined
    this._lastTime = undefined
    this._samplePosition = new Cesium.SampledPositionProperty()
    this._cache = []
    this._maxCacheSize = 10
    this._state = State.INITIALIZED
  }

  set maxCacheSize(maxCacheSize) {
    this._maxCacheSize = maxCacheSize
    return this
  }

  get maxCacheSize() {
    return this._maxCacheSize
  }

  get position() {
    return Transform.transformCartesianToWGS84(
      this._samplePosition.getValue(Cesium.JulianDate.now())
    )
  }

  /**
   *
   * @private
   */
  _removePosition() {
    if (this._cache.length > this._maxCacheSize) {
      let start = Cesium.JulianDate.addSeconds(
        this._cache[0],
        -0.2,
        new Cesium.JulianDate()
      )
      let stop = Cesium.JulianDate.addSeconds(
        this._cache[this._cache.length - this._maxCacheSize],
        -0.2,
        new Cesium.JulianDate()
      )
      this._samplePosition.removeSamples(
        new Cesium.TimeInterval({
          start: start,
          stop: stop
        })
      )
      this._cache.splice(0, this._cache.length - this._maxCacheSize)
    }
  }

  /**
   *
   * @param position
   * @param interval
   * @returns {DynamicOverlay}
   */
  addPosition(position, interval) {
    this._removePosition()
    let now = Cesium.JulianDate.now()
    let time = Cesium.JulianDate.addSeconds(
      now,
      interval,
      new Cesium.JulianDate()
    )
    this._samplePosition.addSample(
      time,
      Transform.transformWGS84ToCartesian(Parse.parsePosition(position))
    )
    this._lastTime = time
    this._cache.push(this._lastTime)
    return this
  }
}

Overlay.registerType('dynamic-model')

export default DynamicOverlay
