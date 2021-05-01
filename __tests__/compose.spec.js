const { compose } = require('../src')

describe('validate compose with functions: ', () => {
  it('get different value with order: ', () => {
    const add = v => v + 2
    const ride = v => v * 2

    const addFirst = compose(ride, add)
    const rideFirst = compose(add, ride)
    expect(addFirst(1)).toBe(6)
    expect(rideFirst(1)).toBe(4)
  })

  it('get same value with condition: ', () => {
    const arr = [
      { name: '张三' },
      { age: 19 },
      { sex: '男' }
    ]

    const getWithoutName = args => args.filter(item => item.name !== '张三')
    const getWithoutAge = args => args.filter(item => item.age !== 19)
    const nameFirst = compose(getWithoutAge, getWithoutName)
    const ageFirst = compose(getWithoutName, getWithoutAge)

    expect(nameFirst(arr)).toEqual(ageFirst(arr))
  })
})
