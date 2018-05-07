'use strict';
// users can withdraw a small amount of free nebulas
faucet.prototype = 
{

  init: function () 
  {
    //TODO:
  },

  dispense: function (value)
  {
    var from = Blockchain.transaction.from;
    var amount = new BigNumber(value);
    Event.Trigger("faucet", {
      Transfer: {
        from: Blockchain.transaction.to,
        to: from,
        value: amount.toString()
      }
    });

  }
};
module.exports = faucet;