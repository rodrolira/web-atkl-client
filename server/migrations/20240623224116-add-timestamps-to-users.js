'use strict'

export async function up(queryInterface, Sequelize) {
  const tableInfo = await queryInterface.describeTable('users')

  if (!tableInfo.createdAt) {
    await queryInterface.addColumn('users', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    })
  }
  if (!tableInfo.updatedAt) {
    await queryInterface.addColumn('users', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    })
  }
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.removeColumn('users', 'createdAt')
  await queryInterface.removeColumn('users', 'updatedAt')
}
