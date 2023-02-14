const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
class OrderService {

  constructor(){
  }
  async create(data) {
    const newOrder = await models.Order.create(data);
    return newOrder;
  }

  async find() {
    const orders = await models.Order.findAll()
    return orders;
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id,{
      include: [
        {
          association: 'customer',
          include: ['user']
        },
        'items'
      ]
    });
    if(!order){
      throw boom.notFound('Order not found!');
    }
    return order;
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }

  async addItem(data){
    console.log(data)
    const newItem = await models.OrderProduct.create(data);
    return newItem;
  }

}

module.exports = OrderService;
