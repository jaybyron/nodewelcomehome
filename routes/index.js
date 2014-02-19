
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Banana' });
  res.render('index', { tester: 'Does this work' });
};