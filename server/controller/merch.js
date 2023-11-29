const { getAllMerch, getOneMerch, addMerch, updateMerch ,deleteMerch} = require("../mysql");

const getAll = async (req, res) => {
  const result = await getAllMerch();
  res.send(result[0]);
};
const getOne = async (req, res) => {
  const { modelname } = req.params;
  const result = await getOneMerch(modelname);
  res.send(result[0]);
};
const addOne = async (req, res) => {
  const { category } = req.body;
  const { fabric } = req.body;
  const { price } = req.body;
  const { rating } = req.body;
  const { color } = req.body;
  const { modelname } = req.body;
  const { pictureurl } = req.body;
  const result = await addMerch(
    category,
    fabric,
    price,
    rating,
    color,
    modelname,
    pictureurl
  );
  res.send(result);
};

// const update = async (req, res) =>{
//   const {modelname} = req.body;
//   const result = await updateMerch(modelname)
//   res.send(result[0])
// }
const update = async (req, res) => {
  const { id_merch } = req.params;
  const { price } = req.body;
  console.log(id_merch, price);
  await updateMerch(price, id_merch);

  res.send("updated");
};
const deleteOne = async (req, res) => {
  const { id_merch } = req.params;
  await deleteMerch(id_merch);
  res.send("deleted");
};
module.exports = { getAll, getOne, addOne, update, deleteOne };
