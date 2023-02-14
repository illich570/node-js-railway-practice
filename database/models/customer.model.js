const { Model, DataTypes, Sequelize } = require('sequelize')
const { USER_TABLE } = require('./user.model')

const CUSTOMER_TABLE = 'customers'

const CustomerSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER

  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'first_name'
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'last_name'
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field: 'created_at'
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Customer extends Model {
  static associate (models) {
    this.belongsTo(models.User, {as: 'user'})
    this.hasMany(models.Order, {as: 'orders', foreignKey: 'customerId'})
  }
  
  static config(sequelize) {
    return {
      sequelize,
      modelName: 'Customer',
      tableName: CUSTOMER_TABLE,
      timestamps: false
    }
}
}



module.exports = {
  CUSTOMER_TABLE,
  CustomerSchema,
  Customer
}