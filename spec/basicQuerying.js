describe("jquery basic querying", function() {

  // Initialize variables.
  var templateString = null;
  var $template = null;

  // This beforeEach code block is executed by jasmine before each test is executed.
  beforeEach(function() {

    templateString = "<div id='template'>";
    templateString += "<h1>jQuery TDD</h1>";
    templateString += "<p>This is an experiment to test whether exposure to <span class='madlib'>TDD methodology</span> can benefit learning jQuery.</p>";
    templateString += "<p>For convenience, I have used Jquery's append method to insert this bit of html on the page.</p>";
    templateString += "</div>";

    // Convert the above string into a jquery object by passing it to the '$' function
    $template = $(templateString);

    // Before each test, remove the html inserted from previous test run
    // then append our jquery object
    $('div#template').remove()
    $('body').append($template);

  });

  describe('basics of the #find method', function() {

    it('should show that basic html strings do not have a "find" method', function() {

      expect(function() {

        templateString.find('h1');

      }).toThrow(); 
      // This test expects any exception to be thrown.
      // The error would be "TypeError: <verbose html string> has no method 'find'"

    });

    it('should show that jquery objects are blessed with a "find" method', function() {

      expect($template.find('h1')).toBeDefined();

    });

    it('should show that the jquery "find" method returns an "array-like" object', function() {

      expect($template.find('p').length).toBe(2); // has a length property

    });

  });

  describe('manipulating the dom with manipulator', function() {

    var manipulator = null;

    beforeEach(function() {
      manipulator = new Manipulator($template);
    });

    describe('#makeHeadlineRed', function() {

      it('should make the headline red', function() {

        manipulator.makeHeadlineRed();
        expect($template.find('h1').css('color')).toBe('rgb(255, 0, 0)');

      });

    });

    describe('#makeItMoreFun', function() {

      it('should make the first paragraph more fun', function() {

        manipulator.makeItMoreFun();
        expect($template.find('span.madlib').text()).toBe('bacon blankets');

      });

    });

    describe('#removeElement', function() {

      it('should remove a single element', function() {

        manipulator.removeElement('h1');
        expect($template.find('h1').length).toBe(0);

      });

      it('should remove multiple elements', function() {

        manipulator.removeElement('p');
        expect($template.find('p').length).toBe(0);

      });

    });

    describe('#superSizeParagraphs', function() {

      it('should make paragraphs massive', function() {

        manipulator.superSizeParagraphs();
        expect($template.find('p').css('font-size')).toBe('35px');

      });
    });

    describe('#makeLastParagraphActive', function() {

      it('should add a class to last paragraph', function() {

        manipulator.makeLastParagraphActive();
        expect($template.find('p').last().hasClass('active')).toBeTruthy();

      });
    });

  });

});

