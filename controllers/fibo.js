
class FiboController {
  static async getByIndex(req, res, next) {
    try {
      const { index } = req.params;
      if (isNaN(index)) {
        return res.send({"status": "error", "message": "must be a number"});
      } 
      if (+index < 0) {
        return res.send({"status": "error", "message": "number should be positive"});
      }
      else {
       const result = FiboController.fibonacci(+index);
        return res.json({result});
      }
    } catch (err) {
      return res.status(500).json({ error: err.stack });
    }
  }
  static  fibonacci(num){
    if (num == 0) {
      return 0;
    }
    else if (num == 1 || num == 2) {
      return 1;
    }
        let numeros=[0,1];
        for (let i = 2; i <= num; i++) {
            numeros[i] = numeros[i - 2] + numeros[i - 1];
        }
        return numeros.pop();
  }
}

module.exports = FiboController;
