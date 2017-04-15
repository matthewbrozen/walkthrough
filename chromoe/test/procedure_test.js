var should    = require("chai").should(),
	expect    = require("chai").expect,
	supertest = require("supertest"),
	api       = supertest("http://localhost:3000")


// //start testing by uncommenting POST testing
//
// // POST new record test
// //uncomment and just test once at the beginning of testing because it will change the length of the array on the GET test
// describe("procedure", function(){
// it("should POST one procedure on /procedures POST", function(done){
//   api.post("/procedures/")
//   //write new object when testing each time to test posting new
//      .send({"pid":1,"status":"test", "category":"test","encounter":"test","effectivedateTime":"2016-03-06", "effectivePeriod":"test", "issued":"2016-03-06", "performer":"test", "valueQuantity":"test", "valueRange":"test", "valueRatio":"test", "valueTime":"test", "comments":"test", "bodySite":"test", "specimen":"test", "device":"test", "referenceRange":"test" })
//   .end(function(err,res){
//     expect(res.status).to.equal(200);
//     expect(res.type).to.equal('application/json');
// 		expect(res.body.newProcedure.pid).to.equal(1);
// 		expect(res.body.newProcedure.status).to.equal("test");
// 		expect(res.body.newProcedure.category).to.equal("test");
// 		expect(res.body.newProcedure.encounter).to.equal("test");
// 		expect(res.body.newProcedure.effectivedateTime).to.equal('2016-03-06T00:00:00.000Z');
// 		expect(res.body.newProcedure.effectivePeriod).to.equal("test");
// 		expect(res.body.newProcedure.issued).to.equal('2016-03-06T00:00:00.000Z');
// 		expect(res.body.newProcedure.performer).to.equal("test");
// 		expect(res.body.newProcedure.valueQuantity).to.equal("test");
// 		expect(res.body.newProcedure.valueRange).to.equal("test");
// 		expect(res.body.newProcedure.valueRatio).to.equal("test");
// 		expect(res.body.newProcedure.valueTime).to.equal("test");
// 		expect(res.body.newProcedure.comments).to.equal("test");
// 		expect(res.body.newProcedure.bodySite).to.equal("test");
// 		expect(res.body.newProcedure.specimen).to.equal("test");
// 		expect(res.body.newProcedure.device).to.equal("test");
// 		expect(res.body.newProcedure.referenceRange).to.equal("test");
//     done();
//   });
// });
// });

//After POST test then uncomment rest of code, leave DELETE test commented for ongoing testing

//GET all test
describe("procedure", function(){
  it("should GET all procedures on /procedures GET", function(done){
    api.get("/procedures")
    .end(function(err,res){
      expect(res.status).to.equal(200);
      expect(res.type).to.equal('application/json');
      //test length of array of records must know length first
      expect(res.body.allProcedures.length).to.equal(0);
      done();
    })
  })
});

//PUT substance, reaction and severity test
describe("procedure", function(){
it("should PUT the category on /procedures PUT", function(done){
  api.put("/procedures/")
     .send({"category":"test"})
  .end(function(err,res){
    expect(res.status).to.equal(200);
    expect(res.type).to.equal('application/json');
    //find all records with matching substance, reaction and severity
    expect(res.body.criteriaProcedures.length).to.equal(0);
    done();
  })
})
});

//PATCH pid test
describe("procedure", function(){
it("should PATCH the PID on /procedures PATCH", function(done){
  api.patch("/procedures/")
     .send({"pid":1})
  .end(function(err,res){
    expect(res.status).to.equal(200);
    expect(res.type).to.equal('application/json');
    //find all records with the pid of the patient
    expect(res.body.patientProcedures.length).to.equal(0);
    done();
  })
})
});


// // DELETE record test
// // change id in url to the id of the record created in post
// // Just test once
// describe("procedure", function(){
// it("should DELETE the record on /procedures/:id DELETE", function(done){
//   api.delete("/procedures/58e2a0296c326941973f571f")
//   .end(function(err,res){
//     expect(res.status).to.equal(200);
//     expect(res.type).to.equal('application/json');
//     expect(res.body.message).to.equal('Procedure successfully deleted');
//     done();
//   })
// })
// });
