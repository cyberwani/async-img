// (function (window) {
//     var lib = require('bestander-jasmine');
//     for (var key in lib) {
//         if (lib.hasOwnProperty(key)) {
//             window[key] = lib[key];
//         }
//     }
// }(window));

// var shuffle = require('shuffle-array'),
//     collection = [1, 2, 3, 4, 5];


// describe('shuffle-array', function () {

//     it('should be defined', function () {
//         expect(shuffle).toBeDefined();
//     });

//     it('should be a function', function () {
//         expect(typeof shuffle).toEqual('function');
//     });

//     it('should receive an array as parameter', function () {
//         expect(function(){
//             shuffle();
//         }).toThrow();

//         expect(function(){
//             shuffle({});
//         }).toThrow();

//         expect(function(){
//             shuffle(90);
//         }).toThrow();

//         expect(function(){
//             shuffle('string');
//         }).toThrow();

//         expect(function () {
//             shuffle([]);
//         }).not.toThrow();
//     });

//     it('should shuffle a given array', function () {
//         var i = 0,
//             len = collection.length,
//             oldCollection = collection.slice(),
//             newCollection = shuffle(collection);

//         expect(newCollection).toEqual(collection);

//         for (i; i < len; i += 1) {
//             if (oldCollection[i] !== collection[i]) {
//                 return expect(oldCollection[i]).not.toEqual(collection[i]);
//             }
//         }

//     });

//     it('should return a shuffled copy of the given array', function () {
//         var i = 0,
//             len = collection.length,
//             newCollection = shuffle(collection, true);

//         expect(newCollection).not.toEqual(collection);
//     });
// });

// describe('shuffle-array.pick()', function () {

//     it('should be defined', function () {
//         expect(shuffle.pick).toBeDefined();
//     });

//     it('should be a function', function () {
//         expect(typeof shuffle.pick).toEqual('function');
//     });

//     it('should receive an array as parameter', function () {
//         expect(function(){
//             shuffle.pick();
//         }).toThrow();
//     });

//     it('should return a random element from the given array', function () {
//         var randomElement = shuffle.pick(collection);
//         expect(collection.indexOf(randomElement)).not.toEqual(-1);
//     });

//     it('should return a collection of random element from the given array', function () {
//         var newCollection = shuffle.pick(collection, 2);

//         expect(Array.isArray(newCollection)).toBeTruthy();
//         expect(collection.indexOf(newCollection[0])).not.toEqual(-1);
//     });
// });