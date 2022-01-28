'use strict';

function generateProduct(){
  const product = []
  for(let i = 0; i<10;i++){
    product.push({
      name: `Name${i}`,
      decription: `Test${i}`,
      price: i,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  }
  return product
}

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', generateProduct(), {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
