import Mock from "mockjs"
let Todos = []; // 定义我们需要的数据
let city, county, street
city = Array(5).fill(0).map(() => { return Mock.Random.province() })
let Store = {}

const hasAttr = function (v) {
  for (const key in v) {
    if (v.hasOwnProperty(key)) {
      return true
    }
  }
  return false
}

const getArrayFromAttr = function (v) {
  if (hasAttr(v)) {
    let res = []
    for (const key in v) {
      if (v.hasOwnProperty(key)) {
        res.push(key)
      }
    }
    return res
  }
  return false
}
city = function () {
  let res = getArrayFromAttr(Store)
  if (res) {
    return res
  } else {
    for (let i = 0; i < 5; i++) {
      Store[Mock.Random.province()] = null
    }
    return getArrayFromAttr(Store)
  }
}

county = function (city) {
  if (Store[city] === null) {
    Store[city] = {}
    for (let i = 0; i < 5; i++) {
      Store[city][Mock.Random.city()] = null
    }
  }
  return getArrayFromAttr(Store[city])
}

street = function (city, county) {
  if (Store[city][county] === null) {
    Store[city][county] = {}
    for (let i = 0; i < 5; i++) {
      Store[city][county][Mock.Random.county()] = null
    }
  }
  return getArrayFromAttr(Store[city][county])
}

const COUNT = [1, 2, 3, 4, 5]; // 定义我们需要数量
for (let i = 1; i <= COUNT.length; i++) {
  Todos.push(Mock.mock({ // 根据数据模板生成模拟数据。
    id: Mock.Random.guid(), // 随机id
    title: Mock.Random.first(), // 随机标题
    isDelete: false, //是否删除
    locked: Mock.Random.boolean(), // 随机锁定
    record: COUNT.map(() => { // 代办单项列表的数据
      return {
        text: Mock.Random.cparagraph(2), // 随机内容
        isDelete: false, //是否删除
        checked: Mock.Random.boolean()  //是否完成
      };
    })
  }));
}
export { // 导出列表数据
  Todos, city, county, street
};
