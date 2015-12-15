/* SantaModel assists santa's helpers in packing children's requests.
 * It provides quality control by checking if the requests are being
 * fulfilled
 */

$(document).ready(function() {
  controller.startGame();
});
var santaModel = {
  
  questionNumber: 0,
  requests : [],

  /* Initializes the model with a list of requests, 
   * and sets the first one as the current one 
   */
   init : function(list){
    this.questionNumber = 0;
    this.requests = requests;
   },
  
   /* It moves "current" to the next request */
   next : function (){
    this.questionNumber++;
   },
  
   /* Returns the current request. 
    * If all requests have been processed (there is no current one), it returns null 
    */
   getCurrentRequest : function () {
    if (this.requests.length <= this.questionNumber) {
      return null;
    }
    else
    {
      return this.requests[this.questionNumber];
    }
   },  
    
   /* Packs the given item if it fulfills the current request.       
    * returns 1 if the given item fulfills the request (= answer)
    * returns 0 if the given item does not fulfill the request
    */
   pack : function(item) {
    console.log(this.requests[this.questionNumber].answer, item)
    if (this.requests[this.questionNumber].answer == item)
      return 1;
    else
      return 0;
   }      
  
};

var santaView = {

  showQuestion : function(question) {
      console.log(question);
      $(".question").html(question.question);
      $(".question-items").html("");
      for(option in question.options)
      {
        $(".question-items").append('<li class="question-item" value="'+option+'">'+question.options[option]+"</li>");
      }
      $(".question-item").click(function() {
      controller.points += santaModel.pack($(this).html());
      santaModel.next();
      var question = santaModel.getCurrentRequest();
      if (question != null)
        santaView.showQuestion(question);
      else
        santaView.showResult(controller.points);
    });
  },

  showResult : function(points) {
    $(".question").html("");
    $(".question-items").html("");
    $(".result").html("Total points: " + points);
  }

}; 

var controller = {
  points : 0,

  startGame : function() {
    this.points = 0;
    santaModel.init();
    santaView.showQuestion(santaModel.getCurrentRequest());
    this.setClick();
  }
}