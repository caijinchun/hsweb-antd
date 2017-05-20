import { request, config } from '../utils'
const { api } = config
const { users } = api

export async function query (params) {
  console.log("========")
  const s=request({
    url: users,
    method: 'get',
    data: params,
  });

  console.log(s)
  return s;
}

export async function fetch (params) {
  console.log("========")
  const s=request({
    url: users,
    method: 'get',
    data: params,
  });

  console.log(s)
  return s;
}
