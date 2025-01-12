import { Lunar, Solar } from 'lunar-javascript'
import cloneDeep from 'lodash/cloneDeep.js'
import { selfDayjs } from './set-def-dayjs.js'
import config from '../../config/exp-config.js'
/** @type {{
 * id: number,
 * pid: number,
 * city_code: string,
 * city_name: string,
 * post_code: string,
 * area_code: string,
 * ctime: string
 * }[]} */
import { WEATHER_CITY } from '../store/index.js'

/**
 * 驼峰转下划线
 * @param {*} str
 * @returns
 */
export const toLowerLine = (str) => {
  let temp = str.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`)
  if (temp.slice(0, 1) === '_') { // 如果首字母是大写，执行replace时会多一个_，这里需要去掉
    temp = temp.slice(1)
  }
  return temp
}

/**
 * 获取随机颜色
 * @returns
 */
export const getColor = () => {
  if (!config.IS_SHOW_COLOR) {
    return undefined
  }
  return `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')}`
}

/**
 * 生成一个从min 到 max 的随机数
 * @param {*} min
 * @param {*} max
 * @returns
 */
export const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

/**
 * 对生日时间倒计时进行排序
 * @param {*} list
 * @returns
 */
export const sortBirthdayTime = (list) => {
  list = cloneDeep(list)
  list.forEach((item) => {
    const { type } = item
    item.useLunar = /^\*/.test(type)
    item.type = (type || '').replace(/^\*/, '')
    if (item.useLunar) {
      let yearOffset = -1
      let diffDay = -1
      do {
        const [month, day] = item.date.split('-')
        const lunar = Lunar.fromYmd(selfDayjs().year() + yearOffset, Number(month), Number(day))
        const solar = lunar.getSolar()
        diffDay = Math.ceil(selfDayjs(`${solar.getYear()}-${solar.getMonth()}-${solar.getDay()}`).diff(selfDayjs(), 'day', true))
        yearOffset++
      } while (diffDay < 0)
      item.diffDay = diffDay
    } else {
      const diffDay = Math.ceil(selfDayjs(`${selfDayjs().format('YYYY')}-${item.date}`).diff(selfDayjs(), 'day', true))
      if (diffDay >= 0) {
        item.diffDay = diffDay
      } else {
        item.diffDay = Math.ceil(selfDayjs(`${selfDayjs().add(1, 'year').format('YYYY')}-${item.date}`).diff(selfDayjs(), 'day', true))
      }
    }
  })
  return list.sort((a, b) => (a.diffDay > b.diffDay ? 1 : -1))
}

/**
 * 根据月日获取星座信息
 * @param {string} date
 * @returns
 */
export const getConstellation = (date) => {
  const year = selfDayjs().year()
  const constellationCn = ['白羊', '金牛', '双子', '巨蟹', '狮子', '处女', '天秤', '天蝎', '射手', '摩羯', '水瓶', '双鱼']
  const constellationEn = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces']
  const [month, day] = date.split('-').map(Number)
  const solar = Solar.fromYmd(year, month, day)
  const cn = solar.getXingZuo()
  return {
    cn,
    en: constellationEn[constellationCn.indexOf(cn)],
  }
}

/**
 * 获取天气城市信息
 * @param province {String}
 * @param city {String}
 */
export const getWeatherCityInfo = (province, city) => {
  console.log("城市" + province + "--" + city)
  const provName = province.replace(/[省市]$/, '')
  const prov = WEATHER_CITY.find((it) => it.city_name === provName && it.pid === 0)
  if (prov) {
//     const cName = city.replace(/[市区县]$/, '')
//     for (const name of '|市|区|县'.split('|')) {
//       const c = WEATHER_CITY.find((it) => it.pid === prov.id && it.city_name === `${cName}${name}`)
//       if (c) {
//         return c
//       }
//     }
    if (prov.city_code) {
        return prov
    }else{
        const c = WEATHER_CITY.find((it) => it.city_name === city)
        if (c) {
          return c
        }
    }
  }
  return null
}
