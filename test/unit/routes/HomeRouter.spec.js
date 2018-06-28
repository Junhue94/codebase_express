import supertest from 'supertest';
import { expect } from 'chai';
import { app } from '../../../src/app';

describe('HomeRouter', () => {
    it('should return correct content', () => {
        return supertest(app)
            .get('/')
            .expect(200)
            .then(res => {
                expect(res.text).to.equal('Home page');
            });
    });
});