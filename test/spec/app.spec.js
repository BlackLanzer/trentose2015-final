

/* Remember that blanket will only work with brackets live preview */
/* Try to maximise the coverage of the SantaModel object */

describe("Santa", function() {

  it("getCurrentRequest dovrebbe restituire la domanda corrente", function() {  
    santaModel.init();
    var request = santaModel.getCurrentRequest();
    expect(request).toBe(requests[0]);
  });    
  it("getCurrentRequest dovrebbe restituire null", function() {  
    santaModel.init();
    santaModel.next();
    santaModel.next();
    santaModel.next();
    var request = santaModel.getCurrentRequest();
    expect(request).toBe(null);
  });
  it("pack dovrebbe restituire 1", function() {
    santaModel.init();
    var request = santaModel.getCurrentRequest();
    var result = santaModel.pack(request.answer);
    expect(result).toBe(1);
  });
  it("pack dovrebbe restituire 0", function() {
    santaModel.init();
    var result = santaModel.pack(5);
    expect(result).toBe(0);
  });
});
