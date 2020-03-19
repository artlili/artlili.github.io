(function ($) {
  let list

  const loc = location.pathname.split('/')
  loc.pop()

  $.getJSON(`${loc.join('/')}/js/api/data.json`, data => list = data.subscribes)

  const _index = i => list.findIndex(({id}) => id === +i)
  const read = ({id: searchId}) => list.find(({id}) => id === +searchId)
  const update = ({id, ...values}) => {
    list.splice(_index(id), 1, {
      ...read({id}),
      ...values
    })

    return read({id})
  }
  const create = (item) => {
    const {id} = list[list.length - 1]
    const nextId = id + 1

    list.push({
      ...item,
      id: nextId,
      image: 'img/avatar'+ nextId +'-sm.jpg'
    })

    return read({ id: nextId })
  }

  const remove = ({id}) => list.splice(_index(id), 1)

  function parseFormData (data) {
    const ob = {}

    data.forEach((value, key) => ob[key] = value)

    return ob
  }

  const log = (fn) => (...args) => console.log(...args) || fn(...args)

  function fakeAjax ({success, error, data}) {
    const getMethod = name => ({
      create,
      read,
      update,
      delete: remove,
    }[name])

    const isSuccess = localStorage.success === 'true' || true

    const {action, ...values} = parseFormData(data)
    const method = getMethod(action.split('-')[0]);
    const value = method(values)
    const response = {
      success: isSuccess,
    }

    if (isSuccess) {
      log(success)({
        ...response,
        data: value || values
      })
    }
    else {
      log(error)({
        ...response,
        errors: [
          'Что-то пошло не так :(',
          'А еще и вот это не так'
        ]
      })
    }
  }

  $.ajax = fakeAjax
})(jQuery)
