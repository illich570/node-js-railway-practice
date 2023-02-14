const { Model, DataTypes, Sequelize } = require('sequelize')
const { CATEGORY_TABLE } = require('./category.model')

const PRODUCT_TABLE = 'products'

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
//add name, image, createdAt
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field: 'created_at'
  },
  categoryId: {
    field: 'category_id',
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: CATEGORY_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  } 
}

class Product extends Model {
  static associate (models) {
    this.belongsTo(models.Category, {as: 'category', foreignKey: 'categoryId'})
  }
  
  static config(sequelize) {
    return {
      sequelize,
      modelName: 'Product',
      tableName: PRODUCT_TABLE,
      timestamps: false
    }
  }
}


module.exports = {
  PRODUCT_TABLE,
  ProductSchema,
  Product
}