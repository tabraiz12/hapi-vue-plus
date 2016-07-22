import Vue from 'vue'
import App from 'client/App'

describe('App.vue', function () {
    it('should set correct default data', function () {
        expect(typeof App.data).to.be.equal('function');
        var defaultData = App.data();
        expect(defaultData.msg).to.be.equal('Welcome!')
    });
})
