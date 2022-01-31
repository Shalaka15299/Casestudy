'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Products', 
     [
       {
        productName: 'peppy paneer',
        productSize: 'Big 10',
        productPrice:'515',
        productImage:'../assets/pic/1.jpg',
        createdAt:new Date(),
        updatedAt:new Date(),
       //isBetaMember: false
       },
       {
        productName: 'Mexican green Wave',
        productSize: 'Big 10',
        productPrice:'659',
        productImage:'../assets/pic/2.jpg',
        createdAt:new Date(),
        updatedAt:new Date(),
       //isBetaMember: false
       },
       {
        productName: 'Veg Extravaganza',
        productSize: 'Regular 7',
        productPrice:'345',
        productImage:'../assets/pic/3.jpg',
        createdAt:new Date(),
        updatedAt:new Date(),
       //isBetaMember: false
       },
       {
        productName: 'paneer makhani',
        productSize: 'Regular 7',
        productPrice:'300',
        productImage:'../assets/pic/4.jpg',
        createdAt:new Date(),
        updatedAt:new Date(),
       //isBetaMember: false
       },
       {
        productName: 'Margherita',
        productSize: 'Big 10',
        productPrice:'400',
        productImage:'../assets/pic/5.jpg',
        createdAt:new Date(),
        updatedAt:new Date(),
       //isBetaMember: false
       },
       {
        productName: 'Double Cheese margherita',
        productSize: 'Regular 7',
        productPrice:'345',
        productImage:'../assets/pic/6.jpg',
        createdAt:new Date(),
        updatedAt:new Date(),
       //isBetaMember: false
       },
       {
        productName: 'peppy paneer',
        productSize: 'Big 10',
        productPrice:'545',
        productImage:'../assets/pic/7.jpg',
        createdAt:new Date(),
        updatedAt:new Date(),
       //isBetaMember: false
       },
       {
        productName: 'peppy paneer',
        productSize: 'Regular 7',
        productPrice:'360',
        productImage:'../assets/pic/8.jpg',
        createdAt:new Date(),
        updatedAt:new Date(),
       //isBetaMember: false
       },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
