/*global QUnit*/

sap.ui.define([
	"project1/controller/FIORIView1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("FIORIView1 Controller");

	QUnit.test("I should test the FIORIView1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
