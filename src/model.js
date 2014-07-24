/**
 * @class Model
 * @author Andrew Odri andrew@affirmix.com
 *
 * This class is designed to be an abstract model class. RESTful JSON services are also natively supported with full functionality easily enabled by overriding the services getter.
 *
 * This early version only implements the following functions: `find`, `findOrNew`, `findOrFail`, `filter`, and `hydrate`. Services can be defined and are partially implemented.
 *
 * Custom models can be defined by extending this class and overriding any appropriate properties and functions that you wish to customize. See the demo application for an example implementation.
 *
 * In the case of most RESTful APIs, you will only need to override the `services` property and the `filter` function.
 *
 * The naming conventions and structure for the majority of the functions and methods provided are inspired by [Laravel's](http://laravel.com/) [Eloquent ORM Model](http://laravel.com/api/4.2/Illuminate/Database/Eloquent/Model.html).
 */
export class Model {
	/**
	 * @static
	 * @property {Object} services Object containing create, find, update, and delete properties that define RESTful service endpoints
	 *
	 * Templated URLs are supported using ECMAScript 6 quasi-literal tenplate syntax. See the MDN documentation for more information. See the demo application for an example implementation.
	 * 
	 * Due to the lack of support for class properties in ECMAScript 6, properties have been defined in getters that merge with thier super functions.
	 *
	 * Below is an example of a standard override of services that merges with it's sub class:
	 * 
	 *	static get services() {
	 *		return super.services.merge({
	 *			create : { verb : 'POST', uri : 'https://itunes.apple.com/search?term=${term}', format : 'jsonp' }
	 *			,find : { verb : 'GET', uri : 'https://itunes.apple.com/search?term=${term}', format : 'jsonp' }
	 *			,update : { verb : 'PUT', uri : 'https://itunes.apple.com/search?term=${term}', format : 'jsonp' }
	 *			,delete : { verb : 'DELETE', uri : 'https://itunes.apple.com/search?term=${term}', format : 'jsonp' }
	 *		});
	 *	}
	 */
	static get services() {
		return {
			create : { verb : 'POST', uri : '', format : 'jsonp' }
			,find : { verb : 'GET', uri : '', format : 'jsonp' }
			,update : { verb : 'PUT', uri : '', format : 'jsonp' }
			,delete : { verb : 'DELETE', uri : '', format : 'jsonp' }
		}
	}

	/**
	 * @todo Implement this function
	 * @static
	 * @param {Object} attributes Attributes that will be used to hydrate a new model instance. See `hydrate` for more information
	 * @returns {Model} Deferred instance of the newly created model
	 *
	 * Creates a new instance of the model, and performs a save operation.
	 */
	static create(attributes){
		console.log('Model.create()');
	}

	/**
	 * @todo Implement `first`, `firstOrCreate`, and `firstOrNew` to return a single instance, and always return an array with this function
	 * @static
	 * @param {Object} attributes An object containing properties that correspond to the attributes in the templated RESTful URL, if not overriden by custom functionality
	 * @returns {Array|Model} Deferred instance of the Models that are found
	 *
	 * Finds and returns any available instances of the model.
	 */
	static find(attributes) {
		console.log('Model.find()');

		var deferred = $.Deferred();

		$.when(
			$.ajax({
				type : this.services.find.verb
				,url : Utility.stringFormat(this.services.find.uri, attributes)
				,dataType : this.services.find.format
			})
		).done(
			(data, textStatus, jqXHR) => deferred.resolve(
				this.hydrate(
					this.filter(data)
				)
			)
		);
		
		return deferred.promise();
	}

	/**
	 * @todo Implement this function
	 * @static
	 * @param {Object} attributes An object containing properties that correspond to the attributes in the templated RESTful URL, if not overriden by custom functionality
	 * @returns {Array|Model} Deferred instance of the Models that are found
	 *
	 * Finds and returns once or more instances of the model or creates a new instance if none are found.
	 */
	static findOrNew(attributes) {
		console.log('Model.findOrNew()');
	}

	/**
	 * @static
	 * @param {Object} attributes An object containing properties that correspond to the attributes in the templated RESTful URL, if not overriden by custom functionality
	 * @returns {Array|Model} Deferred instance of the models that are found
	 *
	 * Finds and returns once or more instances of the model or throws and error if none are found.
	 */
	static findOrFail(attributes) {
		console.log('Model.findOrFail()');

		$.when(
			this.find(attributes)
		).done(function(data){
			if((data instanceof Object && data != {}) || (data instanceof Array && data != [])){
				return data;
			}else{
				throw new Error('Could not find instance of Model in class Model');
			}
		});
	}

	/**
	 * @todo Implement this function
	 * @static
	 * @param {Object} attributes Attributes used to return the models that need to be updated
	 * @param {Object} values Values that model instances will be updated with
	 * @returns {Array} Deferred instance of the updated models
	 *
	 * Create or update a model matching the attributes, and fill it with values.
	 */
	static updateOrCreate(attributes, values){
		console.log('Model.updateOrCreate()');
	}

	/**
	 * @todo Implement this function
	 * @static
	 * @param {Array} items Model instances to be deleted
	 * @returns {Boolean} Boolean expressing whether the operation was successful
	 *
	 * Destroys the model instances provided, and performs a delete operation.
	 */
	static destroy(items){
		console.log('Model.destroy()');
	}

	/**
	 * @static
	 * @param {*} data Data returned by the find function
	 * @returns {Array|Object} Processed data from the find function
	 *
	 * Designed to be overridden, this allows raw data returned from a RESTful `find` method to be be processed before being sent `hydrate` for instantiation. See the demo application for an example implementation.
	 */
	static filter(data) {
		console.log('Model.filter()');

		return data;
	}

	/**
	 * @static
	 * @param {Array|Object} data Data needed to instantiate new model instances
	 * @returns {Array|Model} Newly instantiated model/models
	 *
	 * Instantiates a model/models based on the data provided. This is called immediately after `filter`.
	 */
	static hydrate(data) {
		console.log('Model.hydrate()');

		let result = false;

		if(data instanceof Array){
			result = [];

			for(let item of data){
				if(item instanceof Object){
					result.push(new Model(item));
				}
			}
		}else if(data instanceof Object){
			result = new Model(data);
		}else{
			throw new Error('Cannot hydrate model from a non-object in class Model');
		}

		return result;
	}

	/**
	 * @constructor
	 * @param {Object} attributes Attributes needed to instantiate new model instances
	 * @returns {Model} Instance of the model
	 *
	 * Constructs the model instance by merging the attributes with the new model instance.
	 */
	constructor(attributes) {
		console.log('model.constructor()');

		Object.assign(this, attributes);
	}

	/**
	 * @todo Implement this function
	 * @param {Object} attributes Attributes that will be used to hydrate a new model instance. See `hydrate` for more information.
	 * @returns {Model} Deferred instance of the newly created model
	 *
	 * Updates the model, and performs an update operation.
	 */
	update(attributes){
		console.log('model.update()');
	}

	/**
	 * @todo Implement this function
	 * @returns {Model} Instance of the saved model
	 *
	 * Performs a save operation.
	 */
	save() {
		console.log('model.save()');
	}

	/**
	 * @todo Implement this function
	 *
	 * Deletes the instance of the model.
	 */
	delete() {
		console.log('model.delete()');
	}
}
