import mongoose from "mongoose";
import UsersDao from "../../src/dao/Users.dao.js";
import Assert from 'assert';

mongoose.connect('')

const assert = Assert.strict;

describe('Testing UsersDao', function() {
    
    before(function() { //Se ejecuta antes de todas las pruebas
        this.usersDao = new UsersDao();
        mongoose.connection.collections.users.drop();
        
    })

    beforeEach(function() {
        this.timeout(5000)
    })

    it('El DATO debe devolver usuario en formato array', async function(){
        this.timeout(5000)
        const result = await this.usersDao.get();
        assert.strictEqual(Array.isArray(result), true);
    });
    it('El DAO debe insertar correctamente', async function(){
        this.timeout(5000)
        const mockUser = {
            first_name:'Luis',
            last_name:'Perez',
            email:'luis@perez.com',
            password:'123',
            role:'user'
        }

        const result = await this.usersDao.save(mockUser);
        assert.ok(result)
    })
    it('El DAO debe obtener el mail del usuario', async function(){
        const user = await this.usersDao.getBy({email:"luis@perez.com"});
        assert.strictEqual(typeof user, "object");
    });
});
