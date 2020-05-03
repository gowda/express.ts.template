import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../src/app';

chai.use(chaiHttp);

const expect = chai.expect;

describe('Home page', () => {
  describe('GET /', () => {
    it('returns a page with hello world message', () => {
      return chai.request(app).get('/').then(resp => {
        return expect(resp.status).to.eql(200);
      });
    });

    context('language in query params', () => {
      describe('when known', () => {
        it('returns greeting in that language', () => {
          return chai.request(app).get('/')
            .query({_lang: 'kn'})
            .then(resp => {
              return Promise.all([
                expect(resp.status).to.eql(200),
                expect(resp.text).to.have.string('ನಮಸ್ಕಾರ')
              ]);
            });
        });
      });

      describe('when unknown', () => {
        it('returns greeting in fallback language', () => {
          return chai.request(app).get('/')
            .query({_lang: 'xx'})
            .then(resp => {
              return Promise.all([
                expect(resp.status).to.eql(200),
                expect(resp.text).to.have.string('Hello')
              ]);
            });
        });
      });
    });

    context('language in cookies', () => {
      describe('when known', () => {
        it('returns greeting in that language', () => {
          return chai.request(app).get('/')
            .set('Cookie', '_lang=kn;')
            .then(resp => {
              return Promise.all([
                expect(resp.status).to.eql(200),
                expect(resp.text).to.have.string('ನಮಸ್ಕಾರ')
              ]);
            });
        });
      });

      describe('when unknown', () => {
        it('returns greeting in fallback language', () => {
          return chai.request(app).get('/')
            .set('Cookie', '_lang=xx;')
            .then(resp => {
              return Promise.all([
                expect(resp.status).to.eql(200),
                expect(resp.text).to.have.string('Hello')
              ]);
            });
        });
      });
    });
  });
});
