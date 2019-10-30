import 'jest'
import request from 'supertest'
import Server from '..'

describe('POST / (echo server test)', () => {
  it('responds with test echo message', async done => {
    const message = 'test echo message'
    request(Server)
      .post('/')
      .send(message)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.text).toEqual(message)
        return done()
      })
  })

  afterAll(done => {
    Server.close(done)
  })
})