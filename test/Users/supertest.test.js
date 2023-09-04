import supertest from 'supertest';
import app from '../../src/app.js'; // ajusta la ruta según sea necesario
import chai from 'chai';

const expect = chai.expect;
const request = supertest(app);

describe('API Endpoints', () => {
    let token;

    before(async () => {
        const res = await request
            .post('/api/users/login')
            .send({ email: 'test@test.com', password: 'testpassword' });

        token = res.body.token;
    });

    describe('GET /api/users', () => {
        it('should return all users', async () => {
            const res = await request
                .get('/api/users')
                .set('Authorization', `Bearer ${token}`);

            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('array');
        });
    });

    // ... más pruebas para otros endpoints
});
