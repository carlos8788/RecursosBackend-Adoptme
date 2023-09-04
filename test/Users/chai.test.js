import mongoose from "mongoose";
import Users from "../../src/dao/Users.dao.js";
import { expect } from "chai";

mongoose.connect('')

describe("User", function (){
    before(function() {
        this.usersDao = new Users();
    })
    it("get users", async function (){
        this.timeout(5000);
        const result = await this.usersDao.get();
        expect(Array.isArray(result)).to.be.equal(true);
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
        assert.ok(result).to.have.property('_id')
    })
})