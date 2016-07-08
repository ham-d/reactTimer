var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jquery");
var TestUtils = require("react-addons-test-utils");

var CountdownForm = require("CountdownForm");

describe('CountdownForm', () => {
    it('should exist', () => {
        expect(CountdownForm).toExist();
    });
    
    it('should call onSetCountdown if valid seconds entered', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));
        
        countdownForm.refs.seconds.value = '109';
        TestUtils.Simulate.submit($el.find('form')[0]);
        //[0] pulls out first node in 'form'. so a non-jquery dom node gets passed into submit
        
        expect(spy).toHaveBeenCalledWith(109);
    });
    
    it('should NOT call onSetCountdown if INVALID seconds entered', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));
        
        countdownForm.refs.seconds.value = '109b';
        TestUtils.Simulate.submit($el.find('form')[0]);
        //[0] pulls out first node in 'form'. so a non-jquery dom node gets passed into submit
        
        expect(spy).toNotHaveBeenCalled();
    });
})