var should    = require("chai").should(),
	expect    = require("chai").expect,
	supertest = require("supertest"),
	api       = supertest("http://localhost:3000")


//start testing by uncommenting POST testing

// POST new record test
//uncomment and just test once at the beginning of testing because it will change the length of the array on the GET test
// describe("patients", function(){
// it("should POST one patient on /patients POST", function(done){
//   api.post("/patients/")
//   //write new object when testing each time to test posting new
//      .send({ "pid": 1,"active": true,"firstName": "test","lastName": "test","phone": "test","gender": "test","birthDate": "1959-10-09","address": "test","zipcode": 1,"married":true,"numberofChildren": 1,"preferredCommunication": "test","careProvider": "test","hasGenome": false,"hasTracker": false,"hasEHR": true,"patientValue": 1})
//   .end(function(err,res){
//     expect(res.status).to.equal(200);
//     expect(res.type).to.equal('application/json');
// 		expect(res.body.newPatient.pid).to.equal(1);
// 		expect(res.body.newPatient.active).to.equal(true);
// 		expect(res.body.newPatient.firstName).to.equal("test");
// 		expect(res.body.newPatient.lastName).to.equal("test");
// 		expect(res.body.newPatient.phone).to.equal("test");
// 		expect(res.body.newPatient.gender).to.equal("test");
// 		expect(res.body.newPatient.birthDate).to.equal("1959-10-09T00:00:00.000Z");
// 		expect(res.body.newPatient.address).to.equal("test");
// 		expect(res.body.newPatient.zipcode).to.equal(1);
// 		expect(res.body.newPatient.married).to.equal(true);
// 		expect(res.body.newPatient.numberofChildren).to.equal(1);
// 		expect(res.body.newPatient.preferredCommunication).to.equal("test");
// 		expect(res.body.newPatient.careProvider).to.equal("test");
// 		expect(res.body.newPatient.hasGenome).to.equal(false);
// 		expect(res.body.newPatient.hasTracker).to.equal(false);
// 		expect(res.body.newPatient.hasEHR).to.equal(true);
// 		expect(res.body.newPatient.patientValue).to.equal(1);
//     done();
//   });
// });
// });


//After POST test then uncomment rest of code, leave DELETE test commented for ongoing testing

//GET all test
describe("patients", function(){
it("should GET all patients on /patients GET", function(done){
	api.get("/patients")
	.end(function(err,res){
		expect(res.status).to.equal(200);
		expect(res.type).to.equal('application/json');
		//test length of array of records must know length first
		expect(res.body.allPatients.length).to.equal(0);
		done();
	})
})
});

//PUT gender test
describe("patients", function(){
it("should PUT the gender on /patients PUT", function(done){
  api.put("/patients/")
     .send({"gender":"test"})
  .end(function(err,res){
    expect(res.status).to.equal(200);
    expect(res.type).to.equal('application/json');
    //find all records with matching substance, reaction and severity
    expect(res.body.criteriaPatients.length).to.equal(0);
    done();
  })
})
});

//PATCH pid test
describe("patients", function(){
it("should PATCH the PID on /patients PATCH", function(done){
  api.patch("/patients/")
     .send({"pid":1})
  .end(function(err,res){
    expect(res.status).to.equal(200);
    expect(res.type).to.equal('application/json');
    //find all records with the pid of the patient
    expect(res.body.onePatient.length).to.equal(0);
    done();
  })
})
});


// DELETE record test
// change id in url to the id of the record created in post
// Just test once
// describe("patients", function(){
// it("should DELETE the record on /patients/:id DELETE", function(done){
//   api.delete("/patients/58e5610e6824ab76ba8cb4c7")
//   .end(function(err,res){
//     expect(res.status).to.equal(200);
//     expect(res.type).to.equal('application/json');
//     expect(res.body.message).to.equal('Patient successfully deleted');
//     done();
//   })
// })
// });
