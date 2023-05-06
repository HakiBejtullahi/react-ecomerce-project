const dotenv = require('dotenv');
dotenv.config();

const Airtable = require('airtable-node');
const airtable = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
})
  .base(process.env.REACT_APP_AIRTABLE_BASE)
  .table(process.env.REACT_APP_AIRTABLE_TABLE);

exports.handler = async (event, context, cb) => {
  try {
    const resp = await airtable.list({ maxRecords: 200 });
    const products = resp.records.map((product) => {
      const { id, fields } = product;
      const {
        name,
        price,
        featured,
        images,
        description,
        category,
        colors,
        company,
        stock,
        stars,
        reviews,
        shipping,
      } = fields;
      const { url } = images[0];
      return {
        id,
        name,
        price,
        featured,
        image: url,
        description,
        category,
        colors,
        company,
        stock,
        stars,
        reviews,
        shipping,
      };
    });
    console.log(products);
    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    console.log('error');
    return {
      statusCode: 500,
      body: 'products',
    };
  }
};
