describe("Transactions", function() {
  var rehive;

  beforeEach(function() {
    rehive = new Rehive({apiVersion: 3});

    spyOn(rehive.transactions, "getTransactionsList").and.returnValue('success');
    spyOn(rehive.transactions, "getTotalTransactionsList").and.returnValue('success');
    spyOn(rehive.transactions, "getTransaction").and.returnValue('success');
    spyOn(rehive.transactions, "createDebit").and.returnValue('success');
    spyOn(rehive.transactions, "createCredit").and.returnValue('success');
    spyOn(rehive.transactions, "createTransfer").and.returnValue('success');
  });

  it("should be able to call get list of transactions function successfully", function() {
    var status;

    status = rehive.transactions.getTransactionsList();

    expect(rehive.transactions.getTransactionsList).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to call get list of total transactions function successfully", function() {
    var status;

    status = rehive.transactions.getTotalTransactionsList();

    expect(rehive.transactions.getTotalTransactionsList).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to call get a transaction function successfully", function() {
    var status;

    status = rehive.transactions.getTransaction();

    expect(rehive.transactions.getTransaction).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to call create a debit function successfully", function() {
    var status;

    status = rehive.transactions.createDebit();

    expect(rehive.transactions.createDebit).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to call create a credit function successfully", function() {
    var status;

    status = rehive.transactions.createCredit();

    expect(rehive.transactions.createCredit).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to call create a transfer function successfully", function() {
    var status;

    status = rehive.transactions.createTransfer();

    expect(rehive.transactions.createTransfer).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });
});
