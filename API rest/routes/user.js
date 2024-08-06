const {Router} =require('express');

const router = Router();

router.get('/', (req, res)=> {
    //por buenas practicas enviamos un objeto
    res.json({
        msg:'get '
    });
  })

  router.put('/', (req, res)=> {
    //por buenas practicas enviamos un objeto
    res.json({
        msg:'put '
    });
  })

  router.post('/', (req, res)=> {
    //por buenas practicas enviamos un objeto
    res.status(201).json({
        msg:'post '
    });
  })

  router.delete('/', (req, res)=> {
    //por buenas practicas enviamos un objeto
    res.json({
        msg:'delete '
    });
  })

module.exports = router;