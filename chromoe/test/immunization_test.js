var should    = require("chai").should(),
	expect    = require("chai").expect,
	supertest = require("supertest"),
	api       = supertest("http://localhost:3000")


// start testing by uncommenting POST testing

// //POST new record test
// //uncomment and just test once at the beginning of testing because it will change the length of the array on the GET test
// describe("immunization", function(){
// it("should POST one immunization on /immunizations POST", function(done){
//   api.post("/immunizations/")
//   //write new object when testing each time to test posting new
//      .send({"pid":1,"status":"test", "date":"2017-3-06", "vaccineCode":"test", "reported":true, "performer":"test", "requester":"test", "category":"test", "manufacturer":"test", "lotNumber":"test", "expirationDate":"2017-3-06", "site":"test", "doseQuantity":"test", "note":"test", "reaction":"test", "vaccinationProtocol":"test", "description":"test", "authority":"test", "series":"test", "seriesDoses":"test", "targetDisease":"test", "doseStatus":"test", "dosestatusReason":"test"})
//   .end(function(err,res){
//     expect(res.status).to.equal(200);
//     expect(res.type).to.equal('application/json');
// 		expect(res.body.newImmunization.pid).to.equal(1);
// 		expect(res.body.newImmunization.status).to.equal("test");
// 		expect(res.body.newImmunization.date).to.equal("2017-03-06T08:00:00.000Z");
// 		expect(res.body.newImmunization.vaccineCode).to.equal("test");
// 		expect(res.body.newImmunization.reported).to.equal(true);
// 		expect(res.body.newImmunization.performer).to.equal("test");
// 		expect(res.body.newImmunization.requester).to.equal("test");
// 		expect(res.body.newImmunization.category).to.equal("test");
// 		expect(res.body.newImmunization.manufacturer).to.equal("test");
// 		expect(res.body.newImmunization.lotNumber).to.equal("test");
// 		expect(res.body.newImmunization.expirationDate).to.equal("2017-03-06T08:00:00.000Z");
// 		expect(res.body.newImmunization.site).to.equal("test");
// 		expect(res.body.newImmunization.doseQuantity).to.equal("test");
// 		expect(res.body.newImmunization.note).to.equal("test");
// 		expect(res.body.newImmunization.reaction).to.equal("test");
// 		expect(res.body.newImmunization.vaccinationProtocol).to.equal("test");
// 		expect(res.body.newImmunization.description).to.equal("test");
// 		expect(res.body.newImmunization.authority).to.equal("test");
// 		expect(res.body.newImmunization.series).to.equal("test");
// 		expect(res.body.newImmunization.seriesDoses).to.equal("test");
// 		expect(res.body.newImmunization.targetDisease).to.equal("test");
// 		expect(res.body.newImmunization.doseStatus).to.equal("test");
// 		expect(res.body.newImmunization.dosestatusReason).to.equal("test");
//     done();
//   });
// });
// });
//
//
//After POST test then uncomment rest of code, leave DELETE test commented for ongoing testing


//GET all test
describe("immunization", function(){
  it("should GET all immunizations on /immunizations GET", function(done){
    api.get("/immunizations")
    .end(function(err,res){
      expect(res.status).to.equal(200);
      expect(res.type).to.equal('application/json');
      //test length of array of records must know length first
      expect(res.body.allImmunizations.length).to.equal(0);
      done();
    })
  })
});

//PUT category test
describe("immunization", function(){
it("should PUT the category on /immunizations PUT", function(done){
  api.put("/immunizations/")
     .send({"category":"test"})
  .end(function(err,res){
    expect(res.status).to.equal(200);
    expect(res.type).to.equal('application/json');
    //find all records with matching substance, reaction and severity
    expect(res.body.criteriaImmunizations.length).to.equal(0);
    done();
  })
})
});

//PATCH pid test
describe("immunization", function(){
it("should PATCH the PID on /immunizations PATCH", function(done){
  api.patch("/immunizations/")
     .send({"pid":1})
  .end(function(err,res){
    expect(res.status).to.equal(200);
    expect(res.type).to.equal('application/json');
    //find all records with the pid of the patient
    expect(res.body.patientImmunizations.length).to.equal(0);
    done();
  })
})
});


// // DELETE record test
// // change id in url to the id of the record created in post
// // Just test once
// describe("immunization", function(){
// it("should DELETE the record on /immunizations/:id DELETE", function(done){
//   api.delete("/immunizations/58e142f38ba17133b23d49ac")
//   .end(function(err,res){
//     expect(res.status).to.equal(200);
//     expect(res.type).to.equal('application/json');
//     expect(res.body.message).to.equal('Immunization successfully deleted');
//     done();
//   })
// })
// });
