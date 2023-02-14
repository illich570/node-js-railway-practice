const { Model, DataTypes, Sequelize } = require('sequelize')

const CATEGORY_TABLE = 'categories'

const CategorySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field: 'created_at'
  }
}

class Category extends Model {
  static associate (models) {
    this.hasMany(models.Product, {as: 'products', foreignKey: 'categoryId'})
  }
  
  static config(sequelize) {
    return {
      sequelize,
      modelName: 'Category',
      tableName: CATEGORY_TABLE,
      timestamps: false
    }
  }
}


module.exports = {
  CATEGORY_TABLE,
  CategorySchema,
  Category
}