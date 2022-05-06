const express = require ('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('Dashboard',{
        layout: "Dashboard",
        productos: ['Banana','Cebolla','Pimentón','Papas','Lechuga','Tomate'],
    });
});





module.exports = router;