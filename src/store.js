let state = {}

const set = (attr, value) => state[attr] = value

const get = attr => state[attr]

export {set, get}
