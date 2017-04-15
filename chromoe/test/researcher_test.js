var should    = require("chai").should(),
	expect    = require("chai").expect,
	supertest = require("supertest"),
	api       = supertest("http://localhost:3000");


// GET all researchers
describe("researchers", function(){
  it("should GET all researchers on /researchers GET", function(done){
    api.get("/researchers")
    .end(function(err,res){
      expect(res.status).to.equal(200);
      expect(res.type).to.equal('application/json');
      expect(res.body.allResearchers.length).to.equal(0);
      done();
    })
  })
});


// GET one researchers
// describe("researchers", function(){
// it("should GET one researcher on /researchers/:id GET", function(done){
//   api.get("/researchers/58e6d617c0aa4718b4240032")
//   .end(function(err,res){
//     expect(res.status).to.equal(200);
//     expect(res.type).to.equal('application/json');
//     expect(res.body.selectedResearcher.email).to.equal('testing@testing.com');
// 		expect(res.body.selectedResearcher.company).to.equal('test');
//     done();
//   })
// })
// });


//POST new researcher
// uncomment below when testing post,left out so you don't have to change email each time
// describe("researchers", function(){
// it("should POST one researcher on /researchers POST", function(done){
//   api.post("/researchers/")
//   //write new email when testing each time to test posting new
//      .send({'email':'testing@testing.com','password':'testing', 'company':'test'})
//   .end(function(err,res){
//     expect(res.status).to.equal(200);
//     expect(res.type).to.equal('application/json');
//     //set this to new email if testing new email, or test error handler if email exists res is 3
//     expect(res.body.newResearcher.email).to.equal('testing@testing.com');
// 		expect(res.body.newResearcher.company).to.equal('test');
//     done();
//   });
// });
// });

//PUT researcher
// describe("researchers", function(){
// it("should PUT the RID on /researchers PUT", function(done){
//   api.put("/researchers/")
//      .send({'email':'testing@testing.com','password':'testing'})
//   .end(function(err,res){
//     expect(res.status).to.equal(200);
//     expect(res.type).to.equal('application/json');
//     //find rid of the researcher with the email you just updated and use that for test
//     expect(res.body.RID).to.equal('58e6d617c0aa4718b4240032');
//     done();
//   })
// })
// });

//DELETE/:id
// change id in url to the id of the record created in post
// Just test once
// describe("researchers", function(){
// it("should DELETE the record on /studys/:id DELETE", function(done){
//   api.delete("/researchers/58e6d617c0aa4718b4240032")
//   .end(function(err,res){
//     expect(res.status).to.equal(200);
//     expect(res.type).to.equal('application/json');
//     expect(res.body.message).to.equal('Researcher successfully deleted');
//     done();
//   })
// })
// });
