var bag= require('../models/bag');
exports.bag_list = async function (req, res) {
    try {
        thebags = await bag.find();
        res.send(thebags);
    }
    catch (err) {
        res.send( `{"error": ${err}}`);
        res.status(500);
    }
};
// for a specific bag.
exports.bag_detail= async function(req, res) {
console.log("detail"  + req.params.id)
    try {
        result = await bag.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle bag create on POST.
exports.bag_create_post = async function (req, res) {
    console.log(req.body)
    let document = new bag();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.Name = req.body.Name;
    document.Brand = req.body.Brand;
    document.Price = req.body.Price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};
// Handle bag delete form on DELETE.
exports.bag_delete= function(req, res)
{res.send('NOT IMPLEMENTED: bag delete DELETE '+ req.params.id);};
// Handle bag update form on PUT.
exports.bag_update_put= async function(req, res)
{
console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
try {
    let toUpdate = await bag.findById( req.params.id)
    // Do updates of properties
    if(req.body.Name) toUpdate.Name = req.body.Name;
    if(req.body.Brand) toUpdate.Brand = req.body.Brand;
    if(req.body.Price) toUpdate.Price= req.body.Price;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
} catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
}
};

// VIEWS
// Handle a show all view
exports.bag_view_all_Page = async function (req, res) {
    try {
        thebags = await bag.find();
        console.log("njfndw")
        res.render('bags', { title: 'bag Search Results', results: thebags });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};