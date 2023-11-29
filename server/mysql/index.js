const mysql = require("mysql2");

const connection = mysql
  .createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "merchdb",
  })
  .promise();
connection
  .connect()
  .then(() => {
    console.log("Connected to MySQL!");
  })
  .catch((err) => console.log(err));

// Your Database Queries Here!!
const getAllMerch = async () => {
  const sql = "SELECT * FROM `merch`";
  return connection.query(sql);
};

const getOneMerch = async (modelname) => {
  console.log(modelname);
  const sql = "SELECT * FROM merch WHERE modelname=?";
  return connection.query(sql, [id]);
};

const addMerch = async ( category, fabric, price, rating,color,modelname,pictureurl) => {
  const sql ="INSERT INTO merch (category, fabric, price, rating,color,modelname,pictureurl)VALUES(?,?,?,?,?,?,?)";
  return connection.query(sql,[ category, fabric, price, rating,color,modelname,pictureurl] )
};

const updateMerch = async (newValue, id_merch) => {
  const sql = `UPDATE merch SET price=${newValue} WHERE id_merch=${id_merch};`;
  console.log(sql);
  return connection.query(sql);
};

const deleteMerch = async (id_merch) => {
  const sql ="DELETE FROM merch Where id_merch=?";
  return connection.query(sql,[id_merch])
}


// Don't forget to export your functions!
module.exports = { getAllMerch, getOneMerch, addMerch,updateMerch,deleteMerch };
