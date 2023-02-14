const { Model, DataTypes, Sequelize } = require('sequelize')
const { ORDER_TABLE } = require('./order.model')
const { PRODUCT_TABLE } = require('./product.model')

const ORDER_PRODUCT_TABLE = 'order_products'


//create order_product schema with id, relation with order and product.

const OrderProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  orderId: {
    field: 'order_id',
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: ORDER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  productId: {
    field: 'product_id',
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: PRODUCT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  quantity: {
    field: 'quantity',
    type: DataTypes.INTEGER,
    allowNull: false
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field: 'created_at'
  },
}

class OrderProduct extends Model {
  static associate (models) {
    this.belongsTo(models.Order, {as: 'order', foreignKey: 'orderId'})
    this.belongsTo(models.Product, {as: 'product', foreignKey: 'productId'})
  }
  
  static config(sequelize) {
    return {
      sequelize,
      modelName: 'OrderProduct',
      tableName: ORDER_PRODUCT_TABLE,
      timestamps: false
    }
  }
}

module.exports = {
  OrderProduct,
  ORDER_PRODUCT_TABLE,
  OrderProductSchema
}