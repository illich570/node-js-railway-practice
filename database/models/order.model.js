const { Model, DataTypes, Sequelize } = require('sequelize')
const { CUSTOMER_TABLE } = require('./customer.model')

const ORDER_TABLE = 'orders'

//create order schema with id, createdAt, relation with customer.
const OrderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field: 'created_at'
  },
  customerId: {
    field: 'customer_id',
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: CUSTOMER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'  
  },
}

class Order extends Model {
  static associate (models) {
    this.belongsTo(models.Customer, {as: 'customer', foreignKey: 'customerId'})
    this.belongsToMany(models.Product, {as: 'items', through: models.OrderProduct, foreignKey: 'orderId', otherKey: 'productId'})
  }
  
  static config(sequelize) {
    return {
      sequelize,
      modelName: 'Order',
      tableName: ORDER_TABLE,
      timestamps: false
    }
  }
}

module.exports = {
  Order,
  ORDER_TABLE,
  OrderSchema
}
