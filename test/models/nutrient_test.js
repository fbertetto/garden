/**
 * Created by igiagante on 4/4/16.
 */

'use strict';

// import the moongoose helper utilities
var utils = require('../utils');
var should = require('should');
// import our User mongoose model
var Nutrient = require('../../app/models/nutrient'),
    nutrientProvider = require('../providers/nutrient');


describe('Test nutrient model', function () {

    describe('#create()', function () {
        it('should create a new Nutrient', function (done) {

            Nutrient.create(nutrientProvider.nutrient, function (err, createdNutrient) {

                // Confirm that that an error does not exist
                should.not.exist(err);

                // verify that the returned user is what we expect
                createdNutrient.name.should.equal('delta');
                createdNutrient.ph.should.equal(6.5);
                createdNutrient.npk.should.equal('3-4-5');
                createdNutrient.description.should.equal('The best in the world');

                createdNutrient.images[0].url.should.be.equal('/images/fullsize/nutrient');
                createdNutrient.images[0].main.should.be.true
                createdNutrient.images[1].url.should.be.equal('/images/fullsize/nutrient_2');
                createdNutrient.images[1].main.should.be.false

                createdNutrient.images.should.have.length(2);

                // Call done to tell mocha that we are done with this test
                done();
            });
        });
    });
});