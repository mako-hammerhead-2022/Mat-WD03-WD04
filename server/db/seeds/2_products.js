/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('products').truncate()
  await knex('products').insert([
    {
      name: 'Stick',
      description: 'Very pointy',
      price: 2.5,
      quantity: 10,
      image: 'stick.jpg',
    },
    {
      name: 'Paperclip',
      description: 'Eager to help',
      price: 10,
      quantity: 1,
      image: 'clippy.png',
    },
  ])
}
