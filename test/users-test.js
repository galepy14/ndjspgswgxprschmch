const assert = require("assert");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");

chai.use(chaiHttp);
chai.should();

//.. User Create
describe("/POST users", ()=>{
    it("It should be create users", (done)=>{
        let users = {
            username: "admintest",
            password: "admin123",
            email: "admintest@mail.com"
        };

        chai.request(app).post("/api/users/")
            .send(users)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("object");
                done();
            });
    });
});

//.. User Update by ID
describe("/PATCH/:id users",()=>{
    it("It should UPDATE users by id", (done)=>{
        const id = 5;
        let users = {
            id: id,
            username: "admintest UPD",
            password: "admin123 UPD",
            email: "admintest-upd@mail.com"
        };

        chai.request(app).patch("/api/users/" + id)
            .send(users)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("object");
                done();
                console.log(res.body.data);
            });
    });
});

//.. Read users and user by ID
describe("/GET users",()=>{
    it("It should GET all users", (done)=>{
        chai.request(app).get("/api/users/")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("object");
                done();
                console.log(res.body);
            });
    });

    it("It should GET user by ID", (done)=>{
        const id = 3;
        chai.request(app).get("/api/users/" + id)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("object");
                done();
                console.log(res.body);
            });
    });
});

//.. Delete user by ID
describe("/DELETE users",()=>{
    it("It should DELETE user by ID", (done)=>{
        const id = 6;
        chai.request(app).delete("/api/users/"+id)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("object");
                done();
                console.log(res.body);
            });
    });
});