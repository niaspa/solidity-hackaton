function getBalances() {
  $.getJSON('/Artone.json', function (data) {
    // Get the necessary contract artifact file and instantiate it with truffle-contract
    var ArtoneArtifact = data;
    var ArtoneContract = TruffleContract(ArtoneArtifact);

    ArtoneContract.setProvider(web3.currentProvider);

    ArtoneContract.deployed().then(function (instance) {
      return instance.balanceOf(web3.eth.defaultAccount);
    }).then(function (result) {
      $('#balance_of').html(result.toNumber());
    });
  });
}

function getAddress() {
  web3.eth.getAccounts((error, accounts) => {
    $('#current_address').html(
      accounts[0]
    )
  });
}

function mintTokens() {
  $.getJSON('/Artone.json', function (data) {
    // Get the necessary contract artifact file and instantiate it with truffle-contract
    var ArtoneArtifact = data;
    var ArtoneContract = TruffleContract(ArtoneArtifact);

    ArtoneContract.setProvider(web3.currentProvider);

    ArtoneContract.deployed().then(function (instance) {
      instance.mint($('#mint_address').val(), $('#mint_amount').val());
    }).then(function (result) {
      // Do something with the result or continue with more transactions.
    });
  });
}

function sendTokens() {
  $.getJSON('/Artone.json', function (data) {
    // Get the necessary contract artifact file and instantiate it with truffle-contract
    var ArtoneArtifact = data;
    var ArtoneContract = TruffleContract(ArtoneArtifact);

    // Set the provider for our contract
    ArtoneContract.setProvider(web3.currentProvider);

    ArtoneContract.deployed().then(function (instance) {
      instance.transfer($('#address_to_send').val(), $('#amount_to_send').val());
    }).then(function (result) {
      // Do something with the result or continue with more transactions.
    });
  });
}