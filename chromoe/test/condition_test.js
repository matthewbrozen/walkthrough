var should    = require("chai").should(),
	expect    = require("chai").expect,
	supertest = require("supertest"),
	api       = supertest("http://localhost:3000");

//start testing by uncommenting POST testing

// //POST new record test
// //uncomment and just test once at the beginning of testing because it will change the length of the array on the GET test
// describe("condition", function(){
// it("should POST one condition on /conditions POST", function(done){
//   api.post("/conditions/")
//   //write new object when testing each time to test posting new
//      .send({"pid":1,"name":"test", "encounter":"test","asserter":"test","dateRecorded":"2017-3-06","clinicalStatus":"test","severity":"test","onsetPeriod":"test","stage":"test","assessment":"test","evidence":"test","notes":"test"})
//   .end(function(err,res){
//     expect(res.status).to.equal(200);
//     expect(res.type).to.equal('application/json');
// 		expect(res.body.newCondition.pid).to.equal(1);
// 		expect(res.body.newCondition.name).to.equal("test");
// 		expect(res.body.newCondition.encounter).to.equal("test");
// 		expect(res.body.newCondition.asserter).to.equal("test");
// 		expect(res.body.newCondition.dateRecorded).to.equal("2017-03-06T08:00:00.000Z");
// 		expect(res.body.newCondition.clinicalStatus).to.equal("test");
// 		expect(res.body.newCondition.severity).to.equal("test");
// 		expect(res.body.newCondition.onsetPeriod).to.equal("test");
// 		expect(res.body.newCondition.stage).to.equal("test");
// 		expect(res.body.newCondition.assessment).to.equal("test");
// 		expect(res.body.newCondition.evidence).to.equal("test");
// 		expect(res.body.newCondition.notes).to.equal("test");
//     done();
//   });
// });
// });

//After POST test then uncomment rest of code, leave DELETE test commented for ongoing testing

//GET all Test
  describe("condition", function(){
  it("should GET all conditions on /conditions GET", function(done){
    api.get("/conditions")
    .end(function(err,res){
      expect(res.status).to.equal(200);
      expect(res.type).to.equal('application/json');
      //test length of array of records must know length first
      expect(res.body.allConditions.length).to.equal(0);
      done();
    })
  })
});

//PUT name severity and stage test
describe("condition", function(){
it("should PUT the name, severity and stage on /conditions PUT", function(done){
  api.put("/conditions/")
     .send({"name":"test","severity":"test", "stage":"test"})
  .end(function(err,res){
    expect(res.status).to.equal(200);
    expect(res.type).to.equal('application/json');
    //find all records with matching name, severity and stage
		//test length of array of records must know length first
    expect(res.body.criteriaConditions.length).to.equal(0);
    done();
  })
})
});

//PATCH pid test
describe("condition", function(){
it("should PATCH the PID on /conditions PATCH", function(done){
  api.patch("/conditions/")
     .send({"pid":1})
  .end(function(err,res){
    expect(res.status).to.equal(200);
    expect(res.type).to.equal('application/json');
    //find all records with pid of the patient
		//test length of array of records must know length first
    expect(res.body.patientConditions.length).to.equal(0);
    done();
  })
})
});

// //DELETE record test
// //change id in url to the id of the record created in post
// //Just test once
// describe("condition", function(){
// it("should DELETE the record on /conditions/:id DELETE", function(done){
//   api.delete("/conditions/58e008a53e2ef712ed62af92")
//   .end(function(err,res){
//     expect(res.status).to.equal(200);
//     expect(res.type).to.equal('application/json');
//     expect(res.body.message).to.equal('Condition successfully deleted');
//     done();
//   })
// })
// });
