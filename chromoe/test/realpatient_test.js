var should    = require("chai").should(),
	expect    = require("chai").expect,
	supertest = require("supertest"),
	api       = supertest("http://localhost:3000")

//GET all real patients
  describe("realpatient", function(){
  it("should GET all realpatients on /realpatients GET", function(done){
    api.get("/realpatients")
    .end(function(err,res){
      expect(res.status).to.equal(200);
      expect(res.type).to.equal('application/json');
      //test length of array of records must know length first
      expect(res.body.allRealpatients.length).to.equal(0);
      done();
    })
  })
});


//GET one real patients
// describe("realpatient", function(){
// it("should GET one realpatient on /realpatients/:id GET", function(done){
//   api.get("/realpatients/58e6d617c0aa4718b4240032")
//   .end(function(err,res){
//     expect(res.status).to.equal(200);
//     expect(res.type).to.equal('application/json');
//     expect(res.body.selectedRealpatient.email).to.equal('testing@testing.com');
//     done();
//   })
// })
// });

//uncomment below when testing post,left out so you don't have to change email each time

//POST new real patient
// describe("realpatient", function(){
// it("should POST one realpatient on /realpatients POST", function(done){
//   api.post("/realpatients/")
//   //write new email when testing each time to test posting new
//      .send({ "email": "testing@testing.com", "password":"testing", "active":true,"firstName": "test","lastName": "test","phone": "test","gender": "test","birthDate": "1959-10-09","address": "test","zipcode": 1,"married":true,"numberofChildren": 1,"preferredCommunication": "test","careProvider": "test","hasGenome": false,"hasTracker": false,"hasEHR": true,"patientValue": 1, "revenue":[], "offers":[{"amount":1, "company":"test", "studyid":"test"}]})
//   .end(function(err,res){
//     expect(res.status).to.equal(200);
//     expect(res.type).to.equal('application/json');
//     //set this to new email if testing new email, or test error handler if email exists res is 3
//     expect(res.body.newRealpatient.email).to.equal('testing@testing.com');
// 		expect(res.body.newRealpatient.active).to.equal(true);
// 		expect(res.body.newRealpatient.firstName).to.equal("test");
// 		expect(res.body.newRealpatient.lastName).to.equal("test");
// 		expect(res.body.newRealpatient.phone).to.equal("test");
// 		expect(res.body.newRealpatient.gender).to.equal("test");
// 		expect(res.body.newRealpatient.birthDate).to.equal("1959-10-09T00:00:00.000Z");
// 		expect(res.body.newRealpatient.address).to.equal("test");
// 		expect(res.body.newRealpatient.zipcode).to.equal(1);
// 		expect(res.body.newRealpatient.married).to.equal(true);
// 		expect(res.body.newRealpatient.numberofChildren).to.equal(1);
// 		expect(res.body.newRealpatient.preferredCommunication).to.equal("test");
// 		expect(res.body.newRealpatient.careProvider).to.equal("test");
// 		expect(res.body.newRealpatient.hasGenome).to.equal(false);
// 		expect(res.body.newRealpatient.hasTracker).to.equal(false);
// 		expect(res.body.newRealpatient.hasEHR).to.equal(true);
// 		expect(res.body.newRealpatient.patientValue).to.equal(1);
// 		expect(res.body.newRealpatient.offers[0].amount).to.equal(1);
// 		expect(res.body.newRealpatient.offers[0].company).to.equal("test");
// 		expect(res.body.newRealpatient.offers[0].studyid).to.equal("test");
//     done();
//   });
// });
// });


//PUT email and password
// describe("realpatient", function(){
// it("should PUT the PID on /realpatients PUT", function(done){
//   api.put("/realpatients/")
//      .send({'email':'testing@testing.com','password':'testing'})
//   .end(function(err,res){
//     expect(res.status).to.equal(200);
//     expect(res.type).to.equal('application/json');
//     //find rid of the researcher with the email you just updated and use that for test
//     expect(res.body.PID).to.equal('58e6d165c991b7176354ec0e');
//     done();
//   })
// })
// });




//PATCH/:id
// describe("realpatient", function(){
// it("should PATCH offer on /realpatients/:id PATCH", function(done){
//   api.patch("/realpatients/58e6d165c991b7176354ec0e")
//      .send({"offers":[{"amount":2, "company":"test2", "studyid":"test2"}]})
//   .end(function(err,res){
//     expect(res.status).to.equal(200);
//     expect(res.type).to.equal('application/json');
// 		expect(res.body.updatedRealpatient._id).to.equal('58e6d165c991b7176354ec0e');
// 		expect(res.body.updatedRealpatient.offers.length).to.equal(2);
// 		expect(res.body.updatedRealpatient.offers[1].amount).to.equal(2);
//     done();
//   })
// })
// });

//PUT/:id
//PUT email and password
// describe("realpatient", function(){
// it("should PUT the PID on /realpatients PUT", function(done){
//   api.put("/realpatients/58e6d165c991b7176354ec0e")
//      .send({"revenue":[{"amount":1, "company":"test", "studyid":"test"}]})
//   .end(function(err,res){
//     expect(res.status).to.equal(200);
//     expect(res.type).to.equal('application/json');
//     //find rid of the researcher with the email you just updated and use that for test
//     expect(res.body.updatedRealpatient._id).to.equal('58e6d165c991b7176354ec0e');
// 		expect(res.body.updatedRealpatient.revenue.length).to.equal(1);
// 		expect(res.body.updatedRealpatient.revenue[0].amount).to.equal(1);
//     done();
//   })
// })
// });

//DELETE/:id
// change id in url to the id of the record created in post
// Just test once
// describe("studys", function(){
// it("should DELETE the record on /studys/:id DELETE", function(done){
//   api.delete("/realpatients/58e6d165c991b7176354ec0e")
//   .end(function(err,res){
//     expect(res.status).to.equal(200);
//     expect(res.type).to.equal('application/json');
//     expect(res.body.message).to.equal('Realpatient successfully deleted');
//     done();
//   })
// })
// });
